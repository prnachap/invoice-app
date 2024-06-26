import { json, redirect, type DataFunctionArgs } from "@remix-run/node";
import { Outlet, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import InvoiceDetailsContainer from "~/components/containers/InvoiceDetailsContainer";
import NoInvoice from "~/components/invoice/NoInvoice";
import LayoutContainer from "~/components/ui/LayoutContainer";
import { prisma } from "~/utils/db.server";
import { invariantResponse } from "~/utils/misc";

export async function loader({ params }: DataFunctionArgs) {
  const invoiceId = params.invoice;
  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
    },
    include: {
      items: true,
    },
  });

  invariantResponse(invoice, "Invoice not found", { status: 404 });

  return json({ invoice }, { status: 200 });
}

export async function action({ request, params }: DataFunctionArgs) {
  const invoiceId = params.invoice;
  const formData = await request.formData();
  const intent = formData.get("intent");

  invariantResponse(invoiceId, "Invoice not found", { status: 404 });

  if (intent) {
    if (intent === "delete") {
      await prisma.invoice.delete({
        where: {
          id: invoiceId,
        },
      });
    }
    if (intent === "paid") {
      await prisma.invoice.update({
        where: {
          id: invoiceId,
        },
        data: {
          status: "paid",
        },
      });
      return redirect(`/invoice/${invoiceId}`);
    }
    return redirect("/invoices");
  }

  return null;
}

const InvoiceDetailPage = () => {
  return (
    <>
      <InvoiceDetailsContainer />;
      <Outlet />
    </>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  let errorTitle: string;

  if (isRouteErrorResponse(error)) {
    errorTitle = error.status === 404 ? "Not Found" : "Something went wrong";
  } else {
    errorTitle = "Opps! Something went wrong";
  }

  return (
    <LayoutContainer>
      <NoInvoice title={errorTitle} description="please check in sometime ✈️" />
    </LayoutContainer>
  );
}

export default InvoiceDetailPage;
