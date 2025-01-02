import styles from "@/app/page.module.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function LogoutLayout({ children, modal }: Props) {
  return (
    <>
      LogoutLayout
      <div className={styles.container}>
        {children}
        {modal}
      </div>
    </>
  );
}
