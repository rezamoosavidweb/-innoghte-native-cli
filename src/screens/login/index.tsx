import type { SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as z from "zod";

import { Button, ControlledInput } from "@/components/share/base";

const schema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format"),
  name: z.string().optional(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  readonly onSubmit?: SubmitHandler<FormType>;
};

export function LoginForm({ onSubmit = () => {} }: LoginFormProps) {
  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={10}
      style={styles.flex1}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title} testID="form-title">
            Sign In
          </Text>

          <Text style={styles.subtitle}>
            Welcome! 👋 This is a demo login screen! Feel free to use any email
            and password to sign in and try it out.
          </Text>
        </View>

        <ControlledInput
          control={control}
          label="Name"
          name="name"
          testID="name"
        />

        <ControlledInput
          control={control}
          label="Email"
          name="email"
          testID="email-input"
        />

        <ControlledInput
          control={control}
          label="Password"
          name="password"
          placeholder="***"
          secureTextEntry
          testID="password-input"
        />

        <Button
          label="Login"
          onPress={handleSubmit(onSubmit)}
          style={styles.loginButton}
          testID="login-button"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  flex1: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "#ef4444", // Tailwind red-500
    marginTop: 16,
  },
  subtitle: {
    color: "#6b7280", // Tailwind gray-500
    marginBottom: 24,
    maxWidth: 300,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingBottom: 24,
    textAlign: "center",
  },
});
