import React from "react";
import { Modal, Button, ScrollView, Text, Center, VStack, NativeBaseProvider } from "native-base";

const ModalPopupComponent =()=> {
  const [modalVisible, setModalVisible] = React.useState(false);
  

  return
  ( 
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Return Policy</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <Text>
                Create a 'Return Request' under “My Orders” section of
                App/Website. Follow the screens that come up after tapping on
                the 'Return’ button. Please make a note of the Return ID that we
                generate at the end of the process. Keep the item ready for pick
                up or ship it to us basis on the return mode.
              </Text>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setModalVisible(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
     

      )
        }

      export default ModalPopupComponent;