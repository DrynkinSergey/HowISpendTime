import styles from "./modal.module.scss";
interface ModalI {
    setIsOpen: (value: boolean) => void,
    title: string,
    children: React.ReactNode,
}
const Modal = (
    { setIsOpen, title, children }: ModalI) => {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>{title}</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}> x
                    </button>

                    {/* There is will be our content */}
                    <div className={styles.modalContent}>
                        {children}
                    </div>



                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.okBtn} onClick={() => setIsOpen(false)}>
                                Ok
                            </button>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal;