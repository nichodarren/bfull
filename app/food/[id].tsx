import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Clock, Flame, Star, X } from "lucide-react-native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useToast } from "../../components/Toast";
import { getMenuItem, getTenant } from "../../lib/constants";
import { formatRupiah } from "../../lib/format";
import { useStore } from "../../lib/store";

export default function CustomizeFood() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { addToCart, canAddToCart, startNewOrderWith, cartTenantId } =
    useStore();
  const toast = useToast();
  const [note, setNote] = useState("");
  const [conflict, setConflict] = useState(false);

  const item = getMenuItem(id);
  const tenant = item ? getTenant(item.tenantId) : undefined;
  const currentTenant = cartTenantId ? getTenant(cartTenantId) : undefined;

  if (!item) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-slate-500">Menu tidak ditemukan.</Text>
      </View>
    );
  }

  function onAdd() {
    if (!canAddToCart(item!)) {
      setConflict(true);
      return;
    }
    addToCart(item!, note.trim());
    toast.show("Menu ditambahkan ke keranjang");
    router.back();
  }

  function startNew() {
    startNewOrderWith(item!, note.trim());
    setConflict(false);
    toast.show("Pesanan baru dimulai");
    router.back();
  }

  return (
    <View className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Hero image */}
          <View className="h-60 bg-slate-100">
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: "100%" }}
              contentFit="cover"
              transition={250}
            />
            <Pressable
              onPress={() => router.back()}
              className="absolute right-5 top-5 h-9 w-9 items-center justify-center rounded-full bg-black/40 active:bg-black/60"
            >
              <X color="#fff" size={20} />
            </Pressable>
          </View>

          <View className="gap-6 p-6">
            <View className="flex-row items-start justify-between gap-4">
              <View className="flex-1">
                <Text className="text-2xl font-black leading-tight text-slate-900">
                  {item.name}
                </Text>
                {tenant && (
                  <Pressable
                    onPress={() => router.replace(`/tenant/${tenant.id}`)}
                    className="mt-1.5 flex-row items-center gap-2 self-start active:opacity-70"
                  >
                    <View
                      className={`h-5 w-5 items-center justify-center rounded ${tenant.logoColor}`}
                    >
                      <Text className="text-[8px] font-black text-white">
                        {tenant.initials}
                      </Text>
                    </View>
                    <Text className="text-xs font-bold text-brand-600">
                      {tenant.name}
                    </Text>
                  </Pressable>
                )}
                <Text className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </Text>
              </View>
              <Text className="text-2xl font-black text-brand-500">
                {formatRupiah(item.price)}
              </Text>
            </View>

            {/* Stats */}
            <View className="flex-row gap-3">
              <Stat
                icon={<Clock color="#f97316" size={16} />}
                label="Persiapan"
                value={`${item.prepTime} mnt`}
              />
              <Stat
                icon={<Star color="#fbbf24" size={16} fill="#fbbf24" />}
                label="Rating"
                value={item.rating.toFixed(1)}
              />
              <Stat
                icon={<Flame color="#ef4444" size={16} />}
                label="Kalori"
                value={`${item.calories}`}
              />
            </View>

            {/* Customization */}
            <View className="gap-3">
              <Text className="text-sm font-bold text-slate-800">
                Kustomisasi
              </Text>
              <TextInput
                value={note}
                onChangeText={setNote}
                multiline
                placeholder="Mis., tidak pedas, tambah telur, tanpa bawang..."
                placeholderTextColor="#94a3b8"
                className="min-h-[110px] rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700"
                textAlignVertical="top"
              />
            </View>
          </View>
        </ScrollView>

        {/* Action bar */}
        <View className="border-t border-slate-100 bg-white p-5">
          <Pressable
            onPress={onAdd}
            className="overflow-hidden rounded-2xl active:opacity-90"
          >
            <LinearGradient
              colors={["#f97316", "#ef4444"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View className="w-full items-center py-4">
                <Text className="text-sm font-bold uppercase tracking-wide text-white">
                  Tambah ke Keranjang · {formatRupiah(item.price)}
                </Text>
              </View>
            </LinearGradient>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      {/* Different-tenant confirmation */}
      {conflict && (
        <View className="absolute inset-0 items-center justify-center bg-slate-900/60 p-6">
          <View className="w-full max-w-sm gap-4 rounded-3xl bg-white p-6">
            <Text className="text-lg font-black text-slate-900">
              Mulai pesanan baru?
            </Text>
            <Text className="text-sm leading-6 text-slate-500">
              Keranjangmu sudah berisi menu dari{" "}
              <Text className="font-bold text-slate-700">
                {currentTenant?.name}
              </Text>
              . Kamu hanya bisa memesan dari satu tenant dalam satu waktu.
              Memulai pesanan baru akan mengosongkan keranjangmu saat ini.
            </Text>
            <View className="mt-1 gap-2">
              <Pressable
                onPress={startNew}
                className="items-center rounded-xl bg-brand-500 py-3.5 active:opacity-90"
              >
                <Text className="text-sm font-bold text-white">
                  Mulai pesanan baru dengan {tenant?.name}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setConflict(false)}
                className="items-center py-2.5"
              >
                <Text className="text-sm font-semibold text-slate-500">
                  Pertahankan keranjang
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <View className="flex-1 items-center gap-1 rounded-2xl bg-slate-50 py-3">
      {icon}
      <Text className="text-sm font-black text-slate-800">{value}</Text>
      <Text className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </Text>
    </View>
  );
}
