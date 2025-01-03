import styles from "@/app/layout.module.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function LogoutLayout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
