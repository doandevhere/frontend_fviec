import { getTranslations } from "next-intl/server";

export default async function Page({ params }: { params: { id: string } }) {
  const { id: jobId } = await params;
  const t = await getTranslations("page.job");

  return (
    <div>
      {t("title")} {jobId}
    </div>
  );
}
