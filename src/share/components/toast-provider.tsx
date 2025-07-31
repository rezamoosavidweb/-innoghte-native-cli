import React, { ReactNode, memo } from "react";
import { StyleSheet } from "react-native";
import Toast, {
  BaseToastProps,
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "react-native-toast-message";

export interface ToastProviderProvider {
  children: ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProvider) => {
  const toastConfig = {
    success: (props: BaseToastProps) => (
      <SuccessToast style={[styles.baseToastStyle]} {...props} />
    ),

    info: (props: BaseToastProps) => (
      <InfoToast style={[styles.baseToastStyle]} {...props} />
    ),

    error: (props: BaseToastProps) => (
      <ErrorToast style={[styles.baseToastStyle]} {...props} />
    ),
  };

  return (
    <React.Fragment>
      {children}
      <Toast config={toastConfig} />
    </React.Fragment>
  );
};

const memoToastProvider = memo(ToastProvider);
export { memoToastProvider as ToastProvider };

const styles = StyleSheet.create({
  baseToastStyle: {
    height: "auto",
    minHeight: 40,
    paddingVertical: 10,
  },
});
