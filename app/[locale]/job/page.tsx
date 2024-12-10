import { useTranslations } from "next-intl";

export default function JobPage() {
  const t = useTranslations("page.job");

  return <div>{t("title")}</div>;
}
