import Card from '../ui/Card';

export default function PromotionSection() {
  return (
    <Card className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 p-8 text-center">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-2">🎉 Promo Spesial!</h3>
        <p className="text-lg font-semibold mb-4">Diskon 10% untuk reservasi online</p>
        <p className="text-sm opacity-90">
          Pesan tiket secara online dan dapatkan potongan harga 10%.
          Berlaku untuk semua hari kunjungan.
        </p>
        <div className="mt-6 text-xs opacity-75">
          *Syarat dan ketentuan berlaku
        </div>
      </div>
    </Card>
  );
}