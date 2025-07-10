import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSigned } = useAuth();

  if (isSigned) return <Redirect href={"/"} />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
