"use client";

import React, { useEffect, useState } from "react";
import withPermission from "@/components/auth/withPermission";
import { useRouter, useParams } from "next/navigation";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import Label from "@/components/form/Label";
import Input from "@/components/form/input/InputField";
import Button from "@/components/ui/button/Button";
import SkeletonDefault from "@/components/skeleton/Default";
import Select from "@/components/form/Select";

function EditPaket() {
    const router = useRouter();
    const params = useParams<{ id: string }>();

    const [name, setName] = useState("");
    const [harga, setHarga] = useState("");
    const [detail, setDetail] = useState("");
    const [kategori, setKategori] = useState(""); 
    
    const [fitur, setFitur] = useState<string[]>([""]);

    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        document.title = "Edit Paket | Admin Panel";

        async function fetchPaket() {
            try {
                const res = await fetch(`/api/backend/paket/${params.id}`);
                if (!res.ok) throw new Error("Gagal memuat data Paket");

                const data = await res.json();
                
                setName(data.name || "");
                setHarga(data.harga || "");
                setDetail(data.detail || "");
                setKategori(data.kategori || ""); 
                
                const fetchedFitur = data.paket_fitur?.map((f: any) => f.fitur) || [""];
                setFitur(fetchedFitur);

            } catch (error) {
                console.error(error);
                alert("Gagal memuat data Paket");
            } finally {
                setInitialLoading(false);
            }
        }

        fetchPaket();
    }, [params.id]);

    function handleFiturChange(index: number, value: string) {
        const updated = [...fitur];
        updated[index] = value;
        setFitur(updated);
    }
    
    function handleKategoriChange(value: string | number) {
        setKategori(String(value)); 
    }

    function addFiturField() {
        setFitur([...fitur, ""]);
    }

    function removeFiturField(index: number) {
        setFitur(fitur.filter((_, i) => i !== index));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        if (!name || !harga || !kategori) {
             alert("Nama Paket, Harga, dan Kategori wajib diisi.");
             setLoading(false);
             return;
        }

        try {
            const res = await fetch(`/api/backend/paket/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    harga,
                    detail,
                    kategori,
                    fitur: fitur.filter((f) => f.trim() !== ""),
                }),
            });

            if (!res.ok) throw new Error("Gagal update data Paket");

            router.push("/backend/paket");
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat update Paket");
            setLoading(false);
        }
    }

    if (initialLoading) {
        return (
            <>
                <PageBreadcrumb pageTitle="Data Paket" />
                <ComponentCard title="Form Edit Paket">
                    <SkeletonDefault />
                </ComponentCard>
            </>
        );
    }

    return (
        <div>
            <PageBreadcrumb pageTitle="Edit Paket" />
            <ComponentCard title="Form Edit Paket">
                <form onSubmit={handleSubmit} className="grid gap-4">
                    
                    {/* 1. Nama Paket */}
                    <div>
                        <Label>Nama Paket</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukkan nama paket"
                            disabled={loading}
                        />
                    </div>

                    {/* 2. Kategori (Dropdown menggunakan Select) */}
                    <div>
                        <Label>Kategori</Label>
                        <Select
                            // name="kategori" <-- Dihapus
                            // required <-- Dihapus
                            value={kategori}
                            onChange={handleKategoriChange}
                            placeholder="Pilih Kategori"
                            options={[
                                { label: "Design Interior", value: "Interior" },
                                { label: "Design Eksterior", value: "Eksterior" },
                                { label: "Signature", value: "Signature" } 
                            ]}
                            disabled={loading}
                        />
                    </div>
                    
                    {/* 3. Detail/Deskripsi (Menggunakan textarea) */}
                    <div>
                        <Label>Detail/Deskripsi</Label>
                        <textarea
                            name="detail"
                            rows={3}
                            value={detail}
                            onChange={(e) => setDetail(e.target.value)}
                            placeholder="Masukkan detail atau deskripsi paket"
                            disabled={loading}
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-white dark:placeholder-gray-400"
                        />
                    </div>

                    {/* 4. Harga */}
                    <div>
                        <Label>Harga</Label>
                        <Input
                            type="text"
                            id="harga"
                            name="harga"
                            value={harga}
                            required
                            onChange={(e) => setHarga(e.target.value)}
                            placeholder="Masukkan harga (misal: 25.000 /M²)"
                            disabled={loading}
                        />
                    </div>

                    {/* 5. Fitur (List Dinamis) */}
                    <div>
                        <Label>Fitur</Label>
                        {fitur.map((f, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <div className="flex-1">
                                    <Input
                                        type="text"
                                        value={f}
                                        required
                                        onChange={(e) => handleFiturChange(index, e.target.value)}
                                        placeholder={`Fitur ${index + 1}`}
                                        disabled={loading}
                                        className="w-full"
                                    />
                                </div>
                                {fitur.length > 1 && (
                                    <Button
                                        type="button"
                                        size="xs"
                                        variant="danger"
                                        onClick={() => removeFiturField(index)}
                                        disabled={loading}
                                    >
                                        Hapus
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button
                            type="button"
                            size="xs"
                            variant="primary"
                            onClick={addFiturField}
                            disabled={loading}
                        >
                            Tambah Fitur
                        </Button>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex justify-end mt-4">
                        <Button
                            size="sm"
                            variant="danger"
                            type="button"
                            className="mr-2"
                            onClick={() => router.back()}
                            disabled={loading}
                        >
                            Kembali
                        </Button>

                        <Button size="sm" variant="green" type="submit" disabled={loading}>
                            {loading ? "Menyimpan..." : "Simpan"}
                        </Button>
                    </div>
                </form>
            </ComponentCard>
        </div>
    );
}

export default withPermission(EditPaket, "edit-paket");