import React from "react";
import { Modal, Text, Image } from "@nextui-org/react";

export default function SuccessModal({ closeHandler, visible }) {
    return (
        <>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Body>
                    <Image
                        src={"/Images/success.png"}
                        height="150px"
                        width="150px"
                    />
                </Modal.Body>
                <Modal.Footer css={{display: "flex", justifyContent: "center"}}>
                    <Text h3 css={{fontWeight: "bold"}}>Order Placed 🎉</Text>
                </Modal.Footer>
            </Modal>
        </>
    );
}
