import { Modal, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { X, XCircle } from "react-native-feather";

import { Layouts } from "../../styles/layouts";
import { RH } from "../../styles/responsive";
import colors from "../../config/colors";

const ModalComponent = ({ modalVisible, setModalVisible, children }: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={Layouts?.rowSpaceBetween}>
            <View style={{ flex: 1 }} />
            <X
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              color={colors?.black}
              height={RH(3)}
              width={RH(3)}
            />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors?.white,
    // marginTop: RH(20),
    borderRadius: 20,
    padding: 10,
    alignItems: "center",

    width: "90%",
    minHeight: RH(20),
    // flex: 1,
  },
});
