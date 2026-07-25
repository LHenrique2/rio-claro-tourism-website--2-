import { useState, useMemo, useEffect } from "react";
import { spots as initialSpots, type Spot, type Review } from "./data";
import {
  Heart,
  Search,
  MapPin,
  Compass,
  Printer,
  Sparkles,
  Check,
  ChevronRight,
  Trash2,
  Map,
  X,
  FileText,
  MessageSquare,
  Award,
  ChevronDown,
  Lock,
  Plus,
  Edit2,
  LogOut,
  Settings,
  ExternalLink,
  ShoppingBag,
  Briefcase,
  Bus,
  CalendarDays,
  Newspaper,
  Store
} from "lucide-react";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400" aria-label={`${rating} de 5 estrelas`}>
      {"★".repeat(rating)}
      <span className="text-slate-200">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

interface NavProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenItinerary: () => void;
  itineraryCount: number;
  onOpenAdmin: () => void;
  isAdminLoggedIn: boolean;
}

function Nav({ favoritesCount, onOpenFavorites, onOpenItinerary, itineraryCount, onOpenAdmin, isAdminLoggedIn }: NavProps) {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-emerald-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2 font-bold text-white transition hover:opacity-90">
          <img src="/images/logo-pmrcrj.png" alt="Logo Rio Claro RJ" className="h-8 w-auto object-contain" />
          <span className="leading-tight">
            Rio Claro <span className="text-emerald-300">RJ</span>
          </span>
        </a>
        <nav className="hidden gap-7 text-sm font-medium text-emerald-100 md:flex">
          <a href="#sobre" className="transition hover:text-white">Sobre</a>
          <a href="#historia" className="transition hover:text-white">História</a>
          <a href="#quiz" className="transition hover:text-white flex items-center gap-1"><Sparkles className="h-4 w-4 text-emerald-300 animate-pulse" /> Quiz</a>
          <a href="#pontos" className="transition hover:text-white">Pontos Turísticos</a>
          <a href="#comercio" className="transition hover:text-white flex items-center gap-1"><ShoppingBag className="h-4 w-4 text-amber-300" /> Comércio</a>
          <a href="#roteiro-sec" className="transition hover:text-white">Meu Roteiro</a>
          <a href="#mapa" className="transition hover:text-white">Mapa</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Admin Panel Trigger */}
          <button
            onClick={onOpenAdmin}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105 active:scale-95 ${isAdminLoggedIn ? "bg-amber-500 text-emerald-950 animate-pulse" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            title="Painel do Administrador"
          >
            {isAdminLoggedIn ? <Settings className="h-5 w-5" /> : <Lock className="h-4.5 w-4.5" />}
          </button>

          {/* Favoritos Trigger */}
          <button
            onClick={onOpenFavorites}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:scale-105 active:scale-95"
            title="Ver Favoritos"
          >
            <Heart className={`h-5 w-5 ${favoritesCount > 0 ? "fill-red-400 text-red-400" : ""}`} />
            {favoritesCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Roteiro Trigger */}
          <button
            onClick={onOpenItinerary}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:scale-105 active:scale-95"
            title="Ver Roteiro"
          >
            <Map className={`h-5 w-5 ${itineraryCount > 0 ? "text-emerald-300" : ""}`} />
            {itineraryCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-emerald-950">
                {itineraryCount}
              </span>
            )}
          </button>

          <a
            href="#pontos"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300 hover:shadow-lg active:scale-95"
          >
            Explorar
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex h-screen min-h-[600px] items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-emerald-950/40 to-emerald-950/90" />
      <div className="relative z-10 mx-auto max-w-3xl px-5">
        <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
          <MapPin className="h-4 w-4 text-emerald-300" /> Sul Fluminense • Rio de Janeiro
        </span>
        <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-6xl">
          Descubra as belezas de <span className="text-emerald-300">Rio Claro</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-emerald-50/90">
          Cachoeiras cristalinas, montanhas da Serra do Mar, vilas históricas e o aconchego do
          interior fluminense. Conheça os pontos turísticos, suas localizações e os comentários de
          quem já visitou.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#pontos"
            className="rounded-full bg-emerald-400 px-7 py-3 font-semibold text-emerald-950 shadow-lg transition hover:bg-emerald-300 hover:-translate-y-0.5"
          >
            Ver pontos turísticos
          </a>
          <a
            href="#quiz"
            className="rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20 flex items-center gap-2"
          >
            <Sparkles className="h-5 w-5 text-emerald-300" /> Fazer o Quiz de Destino
          </a>
        </div>
      </div>
      <a href="#sobre" className="absolute bottom-8 z-10 animate-bounce text-3xl text-white/80 select-none">
        <ChevronDown className="h-10 w-10 mx-auto text-emerald-300" />
      </a>
    </section>
  );
}

const statsList = [
  { value: "9", label: "Destinos imperdíveis" },
  { value: "100%", label: "Mata Atlântica" },
  { value: "+1.000m", label: "Picos da Serra" },
  { value: "5", label: "Distritos charmosos" },
];

function About() {
  return (
    <section id="sobre" className="bg-stone-50 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
            Bem-vindo
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-emerald-950 sm:text-4xl">
            Um paraíso verde no Sul Fluminense
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Localizado na região da Serra do Mar, no estado do Rio de Janeiro, o município de Rio
            Claro é um verdadeiro tesouro natural. Cercado por montanhas, cachoeiras e remanescentes
            preservados de Mata Atlântica, o município reúne história, ecoturismo e o autêntico
            charme do interior.
          </p>
          <p className="mt-4 text-stone-600 leading-relaxed">
            De vilas acolhedoras como Lídice e Getulândia às emocionantes ruínas de São João Marcos,
            cada cantinho de Rio Claro conta uma história e oferece paisagens de tirar o fôlego.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {statsList.map((s) => (
              <div key={s.label} className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-stone-100 hover:shadow-md transition">
                <div className="text-2xl font-extrabold text-emerald-600">{s.value}</div>
                <div className="mt-1 text-xs font-medium text-stone-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/trilha.jpg"
            alt="Serra do Mar em Rio Claro"
            className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-emerald-600 px-6 py-4 text-white shadow-lg sm:block border border-emerald-500">
            <div className="text-2xl font-extrabold">Serra do Mar</div>
            <div className="text-sm text-emerald-100">Natureza preservada</div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SpotCardProps {
  spot: Spot;
  onOpen: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
  isInItinerary: boolean;
  onToggleItinerary: (e: React.MouseEvent) => void;
}

function SpotCard({ spot, onOpen, isFavorite, onToggleFavorite, isInItinerary, onToggleItinerary }: SpotCardProps) {
  const avg = spot.reviews && spot.reviews.length > 0
    ? spot.reviews.reduce((a, r) => a + r.rating, 0) / spot.reviews.length
    : 5;

  return (
    <div
      onClick={onOpen}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-stone-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
    >
      <div>
        <div className="relative h-56 overflow-hidden bg-stone-100">
          <img
            src={spot.image || "/images/hero.jpg"}
            alt={spot.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/hero.jpg";
            }}
          />

          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {spot.category}
            </span>
            <span className="rounded-full bg-stone-900/85 px-3 py-1 text-xs font-semibold text-stone-200 backdrop-blur">
              {spot.district}
            </span>
          </div>

          {/* Favoritar */}
          <button
            onClick={onToggleFavorite}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-stone-700 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-110 active:scale-95"
            title={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
          >
            <Heart className={`h-4.5 w-4.5 transition-colors ${isFavorite ? "fill-red-500 text-red-500 animate-pulse" : "text-stone-600 hover:text-red-500"}`} />
          </button>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">{spot.name}</h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-stone-500">📍 {spot.coords}</p>
          <p className="mt-3 line-clamp-2 text-sm text-stone-600">{spot.short}</p>
        </div>
      </div>

      <div className="p-5 pt-0 border-t border-stone-50 mt-auto flex items-center justify-between bg-stone-50/50">
        <span className="text-xs">
          <Stars rating={Math.round(avg)} />{" "}
          <span className="text-stone-400 font-medium">({spot.reviews?.length || 0})</span>
        </span>

        <div className="flex items-center gap-2">
          {/* Botão Roteiro */}
          <button
            onClick={onToggleItinerary}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold flex items-center gap-1 transition ${isInItinerary
              ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
          >
            {isInItinerary ? (
              <>
                <Check className="h-3.5 w-3.5" /> No Roteiro
              </>
            ) : (
              "+ Roteiro"
            )}
          </button>

          <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
            Detalhes →
          </span>
        </div>
      </div>
    </div>
  );
}

interface SpotModalProps {
  spot: Spot;
  onClose: () => void;
  reviews: Review[];
  onAddReview: (r: Review) => void;
  isInItinerary: boolean;
  onToggleItinerary: () => void;
}

function SpotModal({
  spot,
  onClose,
  reviews,
  onAddReview,
  isInItinerary,
  onToggleItinerary,
}: SpotModalProps) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    onAddReview({
      name: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString("pt-BR", { month: "short", year: "numeric" }),
    });
    setName("");
    setText("");
    setRating(5);
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="my-6 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80 bg-stone-200">
          <img
            src={spot.image || "/images/hero.jpg"}
            alt={spot.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/hero.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-stone-700 shadow hover:bg-white transition"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex gap-2">
              <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                {spot.category}
              </span>
              <span className="rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider border border-white/20">
                {spot.district}
              </span>
            </div>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold drop-shadow">{spot.name}</h3>
            <p className="text-sm text-emerald-100 flex items-center gap-1 mt-1">📍 {spot.coords}</p>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          <div>
            <h4 className="text-lg font-bold text-emerald-950 mb-2 flex items-center gap-1.5">
              <FileText className="h-5 w-5 text-emerald-600" /> Sobre o local
            </h4>
            <p className="text-stone-600 leading-relaxed">{spot.description}</p>
          </div>

          {spot.highlights && spot.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {spot.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100"
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          )}

          {/* Ação Roteiro */}
          <div className="bg-emerald-50 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-emerald-100">
            <div>
              <h5 className="font-bold text-emerald-900 text-sm">Gostou deste destino?</h5>
              <p className="text-xs text-emerald-700">Adicione ao seu roteiro personalizado e monte sua rota ideal!</p>
            </div>
            <button
              onClick={onToggleItinerary}
              className={`rounded-full px-5 py-2 text-xs font-bold transition duration-200 shrink-0 ${isInItinerary
                ? "bg-red-500 text-white hover:bg-red-600 shadow"
                : "bg-emerald-700 text-white hover:bg-emerald-800 shadow"
                }`}
            >
              {isInItinerary ? "Remover do meu roteiro" : "Adicionar ao meu roteiro"}
            </button>
          </div>

          {/* Mapa */}
          <div>
            <h4 className="text-lg font-bold text-emerald-950 mb-2 flex items-center gap-1.5">
              <Map className="h-5 w-5 text-emerald-600" /> Localização
            </h4>
            <div className="overflow-hidden rounded-2xl ring-1 ring-stone-200 shadow-inner">
              <iframe
                title={`Mapa de ${spot.name}`}
                className="h-64 w-full"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  spot.mapQuery || spot.name
                )}&output=embed`}
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                spot.mapQuery || spot.name
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
            >
              Abrir no Google Maps →
            </a>
          </div>

          {/* Comentários */}
          <div>
            <h4 className="text-lg font-bold text-emerald-950 mb-3 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-emerald-600" /> Comentários de visitantes ({reviews.length})
            </h4>
            <div className="space-y-3">
              {reviews.map((r, i) => (
                <div key={i} className="rounded-xl bg-stone-50 p-4 ring-1 ring-stone-100 hover:ring-emerald-100 transition duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-sm">
                        {r.name.charAt(0).toUpperCase()}
                      </span>
                      <span className="font-semibold text-emerald-950">{r.name}</span>
                    </div>
                    <span className="text-xs text-stone-400">{r.date}</span>
                  </div>
                  <div className="mt-2 text-sm">
                    <Stars rating={r.rating} />
                  </div>
                  <p className="mt-2 text-sm text-stone-600">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form de comentário */}
          <form onSubmit={submit} className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/30 p-5">
            <h5 className="mb-3 font-bold text-emerald-950 text-sm">Deixe seu comentário</h5>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                required
                className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {"★".repeat(n)} — {n} estrela{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Conte como foi sua experiência..."
              required
              rows={3}
              className="mt-3 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />

            {successMsg && (
              <div className="mt-3 text-xs font-semibold text-emerald-700 bg-emerald-100 p-2.5 rounded-lg">
                ✓ Comentário adicionado com sucesso!
              </div>
            )}

            <button
              type="submit"
              className="mt-3 rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-emerald-700 active:scale-95"
            >
              Publicar comentário
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function HistorySection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const events = [
    {
      year: "Fins do séc. XVIII",
      title: "A Origem e São João Marcos",
      description: "A história da região remonta à colonização do Vale do Paraíba, surgindo como um importante entreposto de tropeiros no caminho que ligava o porto de Angra dos Reis ao interior do país. Nasce ali a freguesia de São João do Príncipe, posteriormente renomeada para São João Marcos, tornando-se uma das primeiras cidades planejadas do Brasil.",
      details: "Originalmente, a região era habitada pelos indígenas Puris. Com a abertura do Caminho Novo da Piedade, o fluxo de tropeiros aumentou expressivamente. A vila foi batizada em homenagem a Dom João VI (então Príncipe Regente) e posteriormente consolidou-se como São João Marcos. Foi pioneira no planejamento urbano na colônia.",
      icon: "🐴",
    },
    {
      year: "Séc. XIX",
      title: "O Ciclo do Ouro Verde",
      description: "A cidade prospera intensamente com a cultura do café, tornando-se uma das maiores produtoras da província fluminense. Sob a influência de poderosos barões e comendadores da época (como o Comendador Breves), a opulenta São João Marcos exibia teatros, hospital próprio, casarões imperiais e uma rica atividade cultural.",
      details: "No auge do café, São João Marcos ostentava requintes metropolitanos. O suntuoso Teatro São João recebia companhias líricas europeias. O lendário Joaquim José de Souza Breves, o 'Rei do Café', possuía dezenas de fazendas na região e comandava o comércio e a política local com prestígio imperial.",
      icon: "☕",
    },
    {
      year: "1938",
      title: "Transferência da Sede para Rio Claro",
      description: "Com o declínio da economia cafeeira e a abolição da escravatura, a outrora rica cidade de São João Marcos começa a perder relevância e população. Administrativamente, a sede do município é transferida para o distrito vizinho de Rio Claro, que crescia estrategicamente cortado por novas vias terrestres.",
      details: "O esgotamento das terras e a falta de ligações ferroviárias modernas isolaram São João Marcos. Enquanto isso, o distrito de Rio Claro prosperava como um entroncamento logístico. A emancipação definitiva de Rio Claro e a subsequente transferência da sede municipal marcaram o início de um novo capítulo administrativo.",
      icon: "🏛️",
    },
    {
      year: "1940",
      title: "A Cidade Inundada",
      description: "Em um dos episódios mais marcantes da história regional, o presidente Getúlio Vargas assina o decreto que desapropria e autoriza o desmonte e posterior inundação de São João Marcos. O objetivo era expandir o reservatório da Represa de Ribeirão das Lajes para abastecer a capital federal (Rio de Janeiro) com água e energia.",
      details: "A demolição foi implacável para evitar que moradores retornassem. Casarões coloniais, duas igrejas históricas e pontes foram colocados abaixo. O sofrimento das famílias desabrigadas marcou a memória coletiva. Sob as águas da represa, ficou submerso um dos mais valiosos patrimônios do período imperial.",
      icon: "💧",
    },
    {
      year: "Hoje",
      title: "Resgate Histórico e Preservação",
      description: "Hoje, Rio Claro valoriza sua história. Em 2011, foi inaugurado o Parque Arqueológico de São João Marcos, o primeiro parque arqueológico a céu aberto do país. As ruínas resgatadas da igreja matriz, ruas de pedra e casarões servem como um espaço de educação ambiental, turismo histórico e orgulho para a população local.",
      details: "Patrocinado pela Light e gerido em parceria com o Inepac, o parque arqueológico resgatou as fundações da antiga Matriz, o calçamento original de pedras e vestígios de residências. O espaço conta com passarelas suspensas, centro de memória com maquetes e anfiteatro, tornando-se o principal marco de turismo histórico da região.",
      icon: "🌿",
    },
  ];

  return (
    <section id="historia" className="bg-emerald-950 py-20 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            Nossa Trajetória
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            A História de Rio Claro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100/80 text-base">
            De próspera capital do café a patrimônio histórico submerso, conheça a jornada que moldou a identidade de nossa terra, desde a lendária São João Marcos.
          </p>
        </div>

        <div className="relative border-l-2 border-emerald-800/80 ml-4 md:ml-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:-translate-x-1/2 md:before:bg-gradient-to-b md:before:from-emerald-800 md:before:via-emerald-700 md:before:to-emerald-900">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="relative mb-12 md:mb-16 last:mb-0">
                <div className="absolute left-[-25px] top-1.5 md:left-1/2 md:top-1.5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-emerald-900 border-2 border-emerald-400 text-lg shadow-lg z-10">
                  {event.icon}
                </div>

                <div className={`pl-6 md:pl-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"}`}>
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className={`w-full text-left rounded-2xl bg-white/5 border p-6 backdrop-blur-sm transition-all duration-300 outline-none group ${isExpanded
                      ? "bg-white/15 border-emerald-400 ring-2 ring-emerald-400/50 shadow-2xl scale-[1.02]"
                      : "border-white/10 hover:bg-white/10 hover:border-emerald-500/30 hover:-translate-y-0.5"
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-block rounded-full bg-emerald-800 px-3 py-1 text-xs font-bold text-emerald-300">
                        {event.year}
                      </span>
                      <span className="text-xs text-emerald-400 font-semibold group-hover:underline">
                        {isExpanded ? "Clique para fechar ▴" : "Clique para expandir ▾"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-sm leading-relaxed text-emerald-100/70">{event.description}</p>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-white/10 text-sm text-emerald-100/90 leading-relaxed">
                        <p>{event.details}</p>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// QUIZ COMPONENT
interface QuizQuestion {
  question: string;
  options: { text: string; category: string }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Como seria o seu dia perfeito em Rio Claro?",
    options: [
      { text: "Entrar em contato direto com a natureza e tomar banho de cachoeira", category: "Cachoeira" },
      { text: "Caminhar pelas ruas históricas e ver ruínas do período imperial", category: "Patrimônio Histórico" },
      { text: "Descansar em um clima serrano aconchegante com pousada e hortênsias", category: "Vila Histórica" },
      { text: "Fazer esportes náuticos ou pescaria em uma represa espetacular", category: "Lago / Lazer" },
      { text: "Aventurar-se com jipe/moto na serra ou fazer trilha pesada", category: "Ecoturismo / Aventura" },
      { text: "Aproveitar um café colonial fartíssimo e hospitalidade do campo", category: "Turismo Rural" },
    ],
  },
  {
    question: "Qual o seu estilo de companhia favorito para esta viagem?",
    options: [
      { text: "Aventurando-me sozinho(a) ou com guia profissional", category: "Ecoturismo / Aventura" },
      { text: "Em casal, buscando romantismo e aconchego de montanha", category: "Vila Histórica" },
      { text: "Com toda a família e crianças, em local estruturado", category: "Patrimônio Histórico" },
      { text: "Grupo de amigos parceiros de estrada ou pescaria", category: "Lago / Lazer" },
    ],
  },
  {
    question: "O que você valoriza mais em um destino?",
    options: [
      { text: "A paz do som das águas correntes e ar puro", category: "Cachoeira" },
      { text: "Aprender coisas novas, cultura e legado cultural", category: "Patrimônio Histórico" },
      { text: "Conforto térmico, comida caseira e pousadas românticas", category: "Vila Histórica" },
      { text: "Adrenalina pura, poeira e trilhas desafiadoras", category: "Ecoturismo / Aventura" },
    ],
  },
];

function QuizSection({ spotsList, onRecommendSpot }: { spotsList: Spot[]; onRecommendSpot: (spotId: string) => void }) {
  const [currentIdx, setCurrentIdx] = useState<number>(-1); // -1 = Start Screen
  const [answers, setAnswers] = useState<string[]>([]);
  const [recommendedSpot, setRecommendedSpot] = useState<Spot | null>(null);

  const startQuiz = () => {
    setCurrentIdx(0);
    setAnswers([]);
    setRecommendedSpot(null);
  };

  const handleSelect = (category: string) => {
    const nextAnswers = [...answers, category];
    setAnswers(nextAnswers);

    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      const counts: Record<string, number> = {};
      nextAnswers.forEach((ans) => {
        counts[ans] = (counts[ans] || 0) + 1;
      });

      let bestCategory = nextAnswers[0];
      let maxCount = 0;
      Object.entries(counts).forEach(([cat, val]) => {
        if (val > maxCount) {
          maxCount = val;
          bestCategory = cat;
        }
      });

      const matches = spotsList.filter(
        (s) => s.category.toLowerCase().includes(bestCategory.toLowerCase())
      );
      const chosenSpot = matches.length > 0 ? matches[Math.floor(Math.random() * matches.length)] : spotsList[0];

      setRecommendedSpot(chosenSpot);
      setCurrentIdx(quizQuestions.length);
    }
  };

  return (
    <section id="quiz" className="bg-emerald-900 py-16 text-white relative">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-4 border border-emerald-800">
          <Sparkles className="h-4 w-4 animate-spin-slow" /> Teste de Personalidade
        </div>

        {currentIdx === -1 && (
          <div className="bg-emerald-950/60 p-8 sm:p-12 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Qual é o seu destino ideal em Rio Claro?</h3>
            <p className="mt-4 text-emerald-100/80 text-sm sm:text-base max-w-lg mx-auto">
              Responda a 3 perguntas simples e nosso assistente indicará a melhor atração da nossa região para o seu perfil de viajante!
            </p>
            <button
              onClick={startQuiz}
              className="mt-8 rounded-full bg-emerald-400 px-8 py-3 text-sm font-bold text-emerald-950 shadow-md transition hover:bg-emerald-300 hover:scale-105 active:scale-95"
            >
              Começar Teste
            </button>
          </div>
        )}

        {currentIdx >= 0 && currentIdx < quizQuestions.length && (
          <div className="bg-emerald-950/60 p-8 sm:p-12 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl text-left max-w-2xl mx-auto">
            <div className="flex justify-between items-center text-xs text-emerald-400 mb-6 font-semibold uppercase">
              <span>Pergunta {currentIdx + 1} de {quizQuestions.length}</span>
              <div className="h-1.5 w-24 bg-emerald-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-400 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <h4 className="text-xl font-bold text-white mb-6 leading-snug">
              {quizQuestions[currentIdx].question}
            </h4>

            <div className="grid gap-3">
              {quizQuestions[currentIdx].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.category)}
                  className="w-full text-left p-4 rounded-xl bg-white/5 border border-white/10 text-sm font-medium transition duration-200 hover:bg-emerald-800 hover:border-emerald-400 hover:translate-x-1 flex items-center justify-between"
                >
                  <span>{opt.text}</span>
                  <ChevronRight className="h-4 w-4 text-emerald-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {currentIdx === quizQuestions.length && recommendedSpot && (
          <div className="bg-emerald-950/60 p-8 sm:p-12 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl max-w-2xl mx-auto">
            <Award className="h-12 w-12 text-amber-400 mx-auto animate-bounce mb-3" />
            <h4 className="text-sm font-bold tracking-widest text-emerald-400 uppercase">Seu Destino Recomendado</h4>

            <h3 className="text-3xl font-extrabold mt-2 text-white">{recommendedSpot.name}</h3>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 shadow-lg relative max-w-md mx-auto group">
              <img
                src={recommendedSpot.image || "/images/hero.jpg"}
                alt={recommendedSpot.name}
                className="h-48 w-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/hero.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent flex items-end p-4">
                <p className="text-xs text-white/90 text-left line-clamp-2">{recommendedSpot.short}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => onRecommendSpot(recommendedSpot.id)}
                className="rounded-full bg-emerald-400 px-6 py-3 text-xs font-bold text-emerald-950 transition hover:bg-emerald-300 active:scale-95"
              >
                Visualizar Detalhes do Destino
              </button>
              <button
                onClick={startQuiz}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white transition hover:bg-white/10 active:scale-95"
              >
                Refazer Teste
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// FORM DE PONTO TURÍSTICO
interface SpotFormModalProps {
  spot: Spot | null; // null if adding new
  onClose: () => void;
  onSave: (spot: Spot) => void;
}

function SpotFormModal({ spot, onClose, onSave }: SpotFormModalProps) {
  const [name, setName] = useState(spot?.name || "");
  const [category, setCategory] = useState(spot?.category || "");
  const [district, setDistrict] = useState(spot?.district || "");
  const [short, setShort] = useState(spot?.short || "");
  const [description, setDescription] = useState(spot?.description || "");
  const [image, setImage] = useState(spot?.image || "");
  const [highlightsInput, setHighlightsInput] = useState(spot?.highlights?.join(", ") || "");
  const [coords, setCoords] = useState(spot?.coords || "");
  const [mapQuery, setMapQuery] = useState(spot?.mapQuery || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !category.trim() || !district.trim() || !short.trim()) return;

    const highlightsArray = highlightsInput
      .split(",")
      .map((h) => h.trim())
      .filter((h) => h.length > 0);

    const updatedSpot: Spot = {
      id: spot?.id || `spot-${Date.now()}`,
      name: name.trim(),
      category: category.trim(),
      district: district.trim(),
      short: short.trim(),
      description: description.trim() || short.trim(),
      image: image.trim() || "/images/hero.jpg",
      highlights: highlightsArray,
      mapQuery: mapQuery.trim() || name.trim(),
      coords: coords.trim() || `${district.trim()} — Rio Claro/RJ`,
      reviews: spot?.reviews || [],
    };

    onSave(updatedSpot);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs overflow-y-auto">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b border-stone-100 pb-4 mb-4">
          <h3 className="font-bold text-stone-900 text-lg">
            {spot ? "Editar Ponto Turístico" : "Adicionar Novo Ponto Turístico"}
          </h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 transition">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Nome do Ponto</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Cachoeira das Três Quedas"
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Categoria</label>
              <input
                type="text"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Ex: Cachoeira, Vila Histórica"
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Distrito</label>
              <input
                type="text"
                required
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="Ex: Lídice, Getulândia"
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Coordenadas/Texto Localização</label>
              <input
                type="text"
                value={coords}
                onChange={(e) => setCoords(e.target.value)}
                placeholder="Ex: Estrada de Lídice — Rio Claro/RJ"
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Endereço de Busca (Google Maps Query)</label>
            <input
              type="text"
              value={mapQuery}
              onChange={(e) => setMapQuery(e.target.value)}
              placeholder="Ex: Cachoeira Sebastião Marinho, Lídice, Rio Claro, RJ"
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Link da Imagem (URL)</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Ex: /images/trilha.jpg ou URL externa HTTP"
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Destaques (Separados por vírgula)</label>
            <input
              type="text"
              value={highlightsInput}
              onChange={(e) => setHighlightsInput(e.target.value)}
              placeholder="Ex: Trilha, Poço para banho, Guia local"
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Descrição Curta</label>
            <input
              type="text"
              required
              value={short}
              onChange={(e) => setShort(e.target.value)}
              placeholder="Uma frase curta de resumo..."
              maxLength={150}
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Descrição Completa</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva a história e os atrativos do local detalhadamente..."
              rows={4}
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-stone-100">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// LOGIN MODAL SIMULADO
function LoginModal({ onClose, onLogin }: { onClose: () => void; onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl text-center">
        <Lock className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-stone-900">Acesso Administrativo</h3>
        <p className="text-xs text-stone-400 mt-1 mb-4">Insira a senha do administrador para gerenciar destinos.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Senha (Dica: admin123)"
            className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white"
          />

          {error && <p className="text-xs font-bold text-red-500">Senha incorreta. Tente novamente.</p>}

          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-stone-200 px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// PAINEL ADMINISTRATIVO PRINCIPAL
interface AdminPanelProps {
  spotsList: Spot[];
  onClose: () => void;
  onLogout: () => void;
  onAdd: () => void;
  onEdit: (spot: Spot) => void;
  onDelete: (id: string) => void;
}

function AdminPanel({ spotsList, onClose, onLogout, onAdd, onEdit, onDelete }: AdminPanelProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white h-[85vh] rounded-3xl shadow-2xl flex flex-col p-6 overflow-hidden">

        {/* Cabeçalho */}
        <div className="flex flex-wrap justify-between items-center border-b border-stone-100 pb-4 mb-4 gap-4">
          <div>
            <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
              <Settings className="h-5 w-5 text-amber-500" /> Painel de Administração
            </h3>
            <p className="text-xs text-stone-400">Gerencie todos os destinos cadastrados no catálogo.</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onAdd}
              className="flex items-center gap-1 bg-emerald-600 text-white rounded-lg px-3.5 py-2 text-xs font-bold hover:bg-emerald-700 transition"
            >
              <Plus className="h-4 w-4" /> Novo Destino
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-1 border border-stone-200 text-stone-600 rounded-lg px-3 py-2 text-xs font-bold hover:bg-stone-50 transition"
            >
              <LogOut className="h-3.5 w-3.5" /> Sair
            </button>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-600 transition ml-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tabela de Destinos */}
        <div className="flex-1 overflow-y-auto rounded-xl border border-stone-100">
          <table className="w-full border-collapse text-left text-sm text-stone-600">
            <thead className="bg-stone-50 text-xs font-bold uppercase tracking-wider text-stone-500 border-b border-stone-100">
              <tr>
                <th className="px-6 py-3">Miniatura</th>
                <th className="px-6 py-3">Nome</th>
                <th className="px-6 py-3">Categoria</th>
                <th className="px-6 py-3">Distrito</th>
                <th className="px-6 py-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {spotsList.map((spot) => (
                <tr key={spot.id} className="hover:bg-stone-50/50 transition">
                  <td className="px-6 py-3 shrink-0">
                    <img
                      src={spot.image || "/images/hero.jpg"}
                      alt={spot.name}
                      className="h-10 w-16 object-cover rounded bg-stone-100 border border-stone-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/hero.jpg";
                      }}
                    />
                  </td>
                  <td className="px-6 py-3 font-bold text-stone-850 truncate max-w-[180px]">
                    {spot.name}
                  </td>
                  <td className="px-6 py-3">
                    <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                      {spot.category}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-stone-500">{spot.district}</td>
                  <td className="px-6 py-3 text-right space-x-1 whitespace-nowrap">
                    <button
                      onClick={() => onEdit(spot)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:text-emerald-600 hover:border-emerald-200 transition"
                      title="Editar"
                    >
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => onDelete(spot.id)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:text-red-600 hover:border-red-200 transition"
                      title="Excluir"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rodapé Interno */}
        <div className="pt-4 border-t border-stone-100 mt-4 text-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl bg-stone-900 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-stone-800"
          >
            Fechar Painel Administrativo
          </button>
        </div>
      </div>
    </div>
  );
}

// SEÇÃO DE COMÉRCIO LOCAL - links para o site Economizei Rio Claro
const comercioLinks = [
  {
    title: "Guia Comercial",
    desc: "Descubra restaurantes, lojas, serviços e os melhores empreendedores locais de Rio Claro.",
    href: "https://www.economizeirioclaro.com.br/p/categorias.html",
    icon: Store,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    ring: "ring-amber-100",
    textAccent: "text-amber-700",
    emoji: "🏪",
  },
  {
    title: "Empregos",
    desc: "Vagas de emprego em Rio Claro e região. Encontre oportunidades de trabalho perto de você.",
    href: "https://www.economizeirioclaro.com.br/p/empregos.html",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    ring: "ring-blue-100",
    textAccent: "text-blue-700",
    emoji: "💼",
  },
  {
    title: "Horário de Ônibus",
    desc: "Confira as linhas e horários do transporte público municipal de Rio Claro/RJ.",
    href: "https://www.economizeirioclaro.com.br/p/horario-de-onibus.html",
    icon: Bus,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
    textAccent: "text-emerald-700",
    emoji: "🚌",
  },
  {
    title: "Eventos Locais",
    desc: "Festivais, shows, feiras e toda a agenda cultural de Rio Claro e arredores.",
    href: "https://www.economizeirioclaro.com.br/p/festas-e-eventos_27.html",
    icon: CalendarDays,
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
    ring: "ring-purple-100",
    textAccent: "text-purple-700",
    emoji: "🎭",
  },
  {
    title: "Notícias",
    desc: "As últimas notícias de Rio Claro, Sul Fluminense e toda a região serrana do RJ.",
    href: "https://www.economizeirioclaro.com.br/",
    icon: Newspaper,
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    ring: "ring-rose-100",
    textAccent: "text-rose-700",
    emoji: "📰",
  },
  {
    title: "Turismo Local",
    desc: "Dicas de roteiros, hospedagens e atrações para quem visita Rio Claro pela primeira vez.",
    href: "https://www.economizeirioclaro.com.br/p/trilhas-cachoeiras-pontos-turisticos-e.html",
    icon: MapPin,
    color: "from-green-500 to-lime-500",
    bg: "bg-green-50",
    ring: "ring-green-100",
    textAccent: "text-green-700",
    emoji: "🌿",
  },
];

function ComercioLocal() {
  return (
    <section id="comercio" className="bg-white py-20 border-t border-stone-100">
      <div className="mx-auto max-w-6xl px-5">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
            Vida na Cidade
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-emerald-950 sm:text-4xl">
            Conheça o Comércio de Rio Claro
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600 text-sm sm:text-base">
            Além das belezas naturais, Rio Claro tem uma comunidade local vibrante. Explore empregos,
            eventos, o guia comercial e muito mais pelo guia local{" "}
            <a
              href="https://www.economizeirioclaro.com.br/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-amber-600 hover:text-amber-700 hover:underline inline-flex items-center gap-1"
            >
              Economizei! Rio Claro
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            .
          </p>
        </div>

        {/* Banner destaque */}
        <a
          href="https://www.economizeirioclaro.com.br/"
          target="_blank"
          rel="noreferrer"
          className="group mb-10 flex flex-col sm:flex-row items-center gap-6 rounded-3xl bg-gradient-to-br from-emerald-950 to-emerald-800 p-7 shadow-xl ring-1 ring-white/10 transition hover:shadow-2xl hover:-translate-y-0.5 duration-300"
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-amber-400/20 ring-1 ring-amber-400/30 text-4xl shadow-inner">
            🛒
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">Portal Parceiro</p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Economizei! Rio Claro — Guia Local
            </h3>
            <p className="mt-2 text-sm text-emerald-100/80 max-w-xl">
              O portal de referência da cidade: horários de ônibus, empregos, eventos, turismo, notícias
              e guia comercial. <span className="font-semibold text-emerald-200">Menos busca, mais achado.</span>
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-emerald-950 shadow-md transition group-hover:bg-amber-300">
            Visitar site <ExternalLink className="h-4 w-4" />
          </div>
        </a>

        {/* Cards de categorias */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comercioLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col gap-4 rounded-2xl ${item.bg} p-6 ring-1 ${item.ring} shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md text-xl`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <div>
                  <h3 className={`text-lg font-extrabold ${item.textAccent} group-hover:underline`}>
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className={`mt-auto flex items-center gap-1 text-xs font-bold ${item.textAccent}`}>
                  Acessar agora <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Nota de rodapé */}
        <p className="mt-8 text-center text-xs text-stone-400">
          Esses links abrem o site{" "}
          <a
            href="https://www.economizeirioclaro.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 hover:underline font-semibold"
          >
            economizeirioclaro.com.br
          </a>{" "}
          em uma nova aba. Não nos responsabilizamos pelo conteúdo externo.
        </p>
      </div>
    </section>
  );
}

export default function App() {

  const [activeId, setActiveId] = useState<string | null>(null);
  const [filter, setFilter] = useState("Todos");
  const [districtFilter, setDistrictFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  // Custom states for interactivity
  const [favorites, setFavorites] = useState<string[]>([]);
  const [itinerary, setItinerary] = useState<string[]>([]);
  const [extraReviews, setExtraReviews] = useState<Record<string, Review[]>>({});

  // Admin & Spots dynamic list states
  const [allSpots, setAllSpots] = useState<Spot[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const [editingSpot, setEditingSpot] = useState<Spot | null>(null);
  const [showFormModal, setShowFormModal] = useState(false);

  // Navigation sidebar panel/modals triggers
  const [showFavoritesPanel, setShowFavoritesPanel] = useState(false);
  const [showItineraryPanel, setShowItineraryPanel] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedSpots = localStorage.getItem("rc_spots");
    if (savedSpots) {
      try {
        setAllSpots(JSON.parse(savedSpots));
      } catch (e) {
        console.error("Failed to parse spots from localstorage", e);
        setAllSpots(initialSpots);
      }
    } else {
      setAllSpots(initialSpots);
    }

    const savedFavs = localStorage.getItem("rc_favs");
    if (savedFavs) {
      try { setFavorites(JSON.parse(savedFavs)); } catch (e) { console.error(e); }
    }
    const savedItin = localStorage.getItem("rc_itin");
    if (savedItin) {
      try { setItinerary(JSON.parse(savedItin)); } catch (e) { console.error(e); }
    }
  }, []);

  // Save spots to state & local storage
  const saveSpots = (updatedSpots: Spot[]) => {
    setAllSpots(updatedSpots);
    localStorage.setItem("rc_spots", JSON.stringify(updatedSpots));
  };

  // Save to local storage when state changes
  const saveFavorites = (newFavs: string[]) => {
    setFavorites(newFavs);
    localStorage.setItem("rc_favs", JSON.stringify(newFavs));
  };

  const saveItinerary = (newItin: string[]) => {
    setItinerary(newItin);
    localStorage.setItem("rc_itin", JSON.stringify(newItin));
  };

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(allSpots.map((s) => s.category)))],
    [allSpots]
  );

  const districts = useMemo(
    () => ["Todos", ...Array.from(new Set(allSpots.map((s) => s.district)))],
    [allSpots]
  );

  // Filter items matching category, district and text search
  const filtered = useMemo(() => {
    return allSpots.filter((spot) => {
      const matchCategory = filter === "Todos" || spot.category === filter;
      const matchDistrict = districtFilter === "Todos" || spot.district === districtFilter;
      const matchSearch =
        searchTerm.trim() === "" ||
        spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.short.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (spot.highlights && spot.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase())));

      return matchCategory && matchDistrict && matchSearch;
    });
  }, [allSpots, filter, districtFilter, searchTerm]);

  const activeSpot = allSpots.find((s) => s.id === activeId) || null;

  const activeReviews = activeSpot
    ? [...(extraReviews[activeSpot.id] || []), ...(activeSpot.reviews || [])]
    : [];

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const updated = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    saveFavorites(updated);
  };

  const toggleItinerary = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const updated = itinerary.includes(id)
      ? itinerary.filter((itinId) => itinId !== id)
      : [...itinerary, id];
    saveItinerary(updated);
  };

  const clearItinerary = () => {
    saveItinerary([]);
  };

  const printItinerary = () => {
    window.print();
  };

  // CRUD ADMIN HANDLERS
  const handleSaveSpot = (spot: Spot) => {
    const exists = allSpots.some((s) => s.id === spot.id);
    let updated: Spot[];
    if (exists) {
      updated = allSpots.map((s) => (s.id === spot.id ? spot : s));
    } else {
      updated = [spot, ...allSpots];
    }
    saveSpots(updated);
    setShowFormModal(false);
    setEditingSpot(null);
  };

  const handleDeleteSpot = (id: string) => {
    if (window.confirm("Deseja realmente excluir este ponto turístico?")) {
      const updated = allSpots.filter((s) => s.id !== id);
      saveSpots(updated);
      // clean itinerary/favorites if removed
      saveFavorites(favorites.filter((favId) => favId !== id));
      saveItinerary(itinerary.filter((itinId) => itinId !== id));
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      <Nav
        favoritesCount={favorites.length}
        itineraryCount={itinerary.length}
        onOpenFavorites={() => setShowFavoritesPanel(true)}
        onOpenItinerary={() => setShowItineraryPanel(true)}
        onOpenAdmin={() => {
          if (isAdminLoggedIn) {
            setShowAdminPanel(true);
          } else {
            setShowAdminLogin(true);
          }
        }}
        isAdminLoggedIn={isAdminLoggedIn}
      />
      <Hero />
      <About />
      <HistorySection />

      {/* QUIZ SECTION */}
      {allSpots.length > 0 && (
        <QuizSection
          spotsList={allSpots}
          onRecommendSpot={(spotId) => {
            setActiveId(spotId);
          }}
        />
      )}

      {/* Pontos turísticos */}
      <section id="pontos" className="bg-stone-50/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              O que visitar
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-emerald-950 sm:text-4xl">
              Pontos Turísticos de Rio Claro
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-stone-600 text-sm sm:text-base">
              Use os filtros ou faça uma pesquisa para encontrar cachoeiras, ruínas históricas, rotas de ecoturismo e muito mais.
            </p>
          </div>

          {/* Barra de Filtros e Busca */}
          <div className="mt-10 bg-white p-5 rounded-2xl shadow-sm ring-1 ring-stone-100 flex flex-col gap-5">
            {/* Linha 1: Input de Busca */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-stone-400" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar por cachoeira, patrimônio, marcos históricos ou distrito..."
                className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Linha 2: Categorias */}
            <div>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2">Filtrar por Categoria:</span>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${filter === c
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Linha 3: Distritos */}
            <div>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2">Filtrar por Distrito:</span>
              <div className="flex flex-wrap gap-1.5">
                {districts.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDistrictFilter(d)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${districtFilter === d
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Resultado de quantidade */}
          <div className="mt-6 flex justify-between items-center text-xs text-stone-500 font-medium px-1">
            <span>Mostrando {filtered.length} de {allSpots.length} pontos turísticos</span>
            {(filter !== "Todos" || districtFilter !== "Todos" || searchTerm !== "") && (
              <button
                onClick={() => {
                  setFilter("Todos");
                  setDistrictFilter("Todos");
                  setSearchTerm("");
                }}
                className="text-emerald-600 hover:underline font-bold"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {/* Lista de Cards */}
          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((spot) => (
                <SpotCard
                  key={spot.id}
                  spot={spot}
                  onOpen={() => setActiveId(spot.id)}
                  isFavorite={favorites.includes(spot.id)}
                  onToggleFavorite={(e) => toggleFavorite(spot.id, e)}
                  isInItinerary={itinerary.includes(spot.id)}
                  onToggleItinerary={(e) => toggleItinerary(spot.id, e)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center py-12 rounded-3xl bg-white border border-stone-200/60 max-w-md mx-auto">
              <Compass className="h-10 w-10 text-stone-300 mx-auto mb-3" />
              <p className="text-stone-600 font-semibold">Nenhum destino encontrado</p>
              <p className="text-xs text-stone-400 mt-1">Tente ajustar seus termos de pesquisa ou filtros.</p>
            </div>
          )}
        </div>
      </section>

      {/* ROTEIRO DE VIAGEM PERSONALIZADO */}
      <section id="roteiro-sec" className="bg-white py-20 border-t border-stone-100">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Monte seu Plano
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-emerald-950 sm:text-4xl">
              Planejador de Roteiro
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-stone-600 text-sm">
              Monte o roteiro de viagem perfeito para você! Adicione destinos na lista acima ou clique nos cards, organize a ordem de visita e gere uma versão pronta para impressão ou PDF.
            </p>
          </div>

          {itinerary.length > 0 ? (
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-100 shadow-sm print:shadow-none print:border-none print:bg-white">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6 border-b border-stone-200 pb-4 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {itinerary.length}
                  </span>
                  <span className="font-bold text-stone-800 text-sm">Paradas no seu roteiro</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={printItinerary}
                    className="flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                  >
                    <Printer className="h-3.5 w-3.5" /> Imprimir / PDF
                  </button>
                  <button
                    onClick={clearItinerary}
                    className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Limpar Tudo
                  </button>
                </div>
              </div>

              {/* Roteiro Visão de Impressão */}
              <div className="hidden print:block mb-8">
                <h1 className="text-3xl font-bold text-emerald-950">Guia de Roteiro: Rio Claro - RJ</h1>
                <p className="text-sm text-stone-500 mt-1">Gerado em: {new Date().toLocaleDateString("pt-BR")}</p>
                <div className="border-b border-stone-300 mt-4 mb-6" />
              </div>

              <div className="space-y-4">
                {itinerary.map((spotId, idx) => {
                  const spot = allSpots.find((s) => s.id === spotId);
                  if (!spot) return null;
                  return (
                    <div
                      key={spot.id}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm print:shadow-none"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-sm">
                        {idx + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h4 className="font-bold text-stone-900 text-base">{spot.name}</h4>
                          <span className="text-xs text-stone-400">({spot.district})</span>
                        </div>
                        <p className="text-xs text-emerald-600 mt-0.5 font-semibold">📍 {spot.coords}</p>
                        <p className="text-sm text-stone-600 mt-2">{spot.short}</p>

                        {spot.highlights && spot.highlights.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {spot.highlights.map((h) => (
                              <span key={h} className="text-[10px] font-semibold text-stone-500 bg-stone-100 rounded-full px-2 py-0.5">
                                {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => toggleItinerary(spot.id)}
                        className="text-stone-400 hover:text-red-500 transition shrink-0 self-center print:hidden p-1"
                        title="Remover do roteiro"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 text-center bg-emerald-50 rounded-2xl p-4 border border-emerald-100 print:hidden">
                <p className="text-xs text-emerald-800 font-medium">💡 <b>Dica de viagem:</b> O distrito de Lídice fica a cerca de 30 minutos de Passa Três. Planeje paradas para alimentação no centro histórico ou em Getulândia!</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 rounded-3xl border border-dashed border-stone-300 max-w-md mx-auto">
              <Map className="h-10 w-10 text-stone-300 mx-auto mb-3" />
              <p className="text-stone-600 font-semibold text-sm">Seu roteiro está vazio</p>
              <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto px-4">
                Explore os pontos turísticos e clique em <b>"+ Roteiro"</b> nos cards ou dentro dos detalhes para começar a organizar sua viagem.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* COMÉRCIO LOCAL */}
      <ComercioLocal />

      {/* Mapa geral */}
      <section id="mapa" className="bg-emerald-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              Onde fica
            </span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Rio Claro no mapa
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-emerald-100/80">
              Município localizado no Sul Fluminense, no estado do Rio de Janeiro, encravado na Serra
              do Mar.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <iframe
              title="Mapa de Rio Claro RJ"
              className="h-[420px] w-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=Rio%20Claro%2C%20RJ%2C%20Brasil&z=11&output=embed"
            />
          </div>
        </div>
      </section>

      {/* Contato / Footer */}
      <footer id="contato" className="bg-emerald-950 pb-10 text-emerald-100/80">
        <div className="mx-auto max-w-6xl border-t border-white/10 px-5 pt-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-white">
                🏞️ Rio Claro RJ
              </div>
              <p className="mt-3 text-sm">
                Um convite para descobrir as belezas naturais e a história do Sul Fluminense.
              </p>

              <button
                onClick={() => {
                  if (isAdminLoggedIn) {
                    setShowAdminPanel(true);
                  } else {
                    setShowAdminLogin(true);
                  }
                }}
                className="mt-4 flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition"
              >
                <Lock className="h-3 w-3" /> Área do Administrador
              </button>
            </div>
            <div>
              <h4 className="font-semibold text-white">Navegação</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#sobre" className="hover:text-white transition">Sobre a cidade</a></li>
                <li><a href="#historia" className="hover:text-white transition">História</a></li>
                <li><a href="#quiz" className="hover:text-white transition">Fazer Quiz</a></li>
                <li><a href="#pontos" className="hover:text-white transition">Pontos turísticos</a></li>
                <li><a href="#comercio" className="hover:text-white transition flex items-center gap-1">🛒 Comércio Local</a></li>
                <li><a href="#roteiro-sec" className="hover:text-white transition">Planejador de Roteiro</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Informações</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>📍 Sul Fluminense — RJ</li>
                <li>🌿 Serra do Mar e Mata Atlântica</li>
                <li>📷 Turismo de natureza e história</li>
                <li className="pt-2 border-t border-white/10">
                  <a
                    href="https://www.economizeirioclaro.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition font-semibold"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Guia Local Economizei!
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-emerald-100/50">
            © {new Date().getFullYear()} Guia Turístico de Rio Claro, RJ. Feito com 💚 para divulgar
            as belezas do município.
          </p>
        </div>
      </footer>

      {/* MODAL DETALHADA DO SPOT */}
      {activeSpot && (
        <SpotModal
          spot={activeSpot}
          onClose={() => setActiveId(null)}
          reviews={activeReviews}
          isInItinerary={itinerary.includes(activeSpot.id)}
          onToggleItinerary={() => toggleItinerary(activeSpot.id)}
          onAddReview={(r) => {
            const updatedSpots = allSpots.map((s) => {
              if (s.id === activeSpot.id) {
                return {
                  ...s,
                  reviews: [r, ...(s.reviews || [])],
                };
              }
              return s;
            });
            saveSpots(updatedSpots);
            setExtraReviews((prev) => ({
              ...prev,
              [activeSpot.id]: [r, ...(prev[activeSpot.id] || [])],
            }));
          }}
        />
      )}

      {/* SIDEBAR FAVORITOS PANEL */}
      {showFavoritesPanel && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end transition-opacity" onClick={() => setShowFavoritesPanel(false)}>
          <div
            className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <h3 className="font-bold text-stone-900 text-lg flex items-center gap-1.5">
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" /> Meus Favoritos ({favorites.length})
                </h3>
                <button onClick={() => setShowFavoritesPanel(false)} className="text-stone-400 hover:text-stone-600 transition">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 overflow-y-auto max-h-[70vh] space-y-3 pr-1">
                {favorites.length > 0 ? (
                  favorites.map((favId) => {
                    const spot = allSpots.find((s) => s.id === favId);
                    if (!spot) return null;
                    return (
                      <div key={spot.id} className="flex gap-3 p-2.5 rounded-xl border border-stone-100 hover:bg-stone-50 transition cursor-pointer" onClick={() => { setActiveId(spot.id); setShowFavoritesPanel(false); }}>
                        <img
                          src={spot.image || "/images/hero.jpg"}
                          alt={spot.name}
                          className="h-16 w-16 rounded-lg object-cover shrink-0 bg-stone-100"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/hero.jpg";
                          }}
                        />
                        <div className="min-w-0">
                          <h4 className="font-bold text-stone-800 text-sm truncate">{spot.name}</h4>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 rounded px-1.5 py-0.5">{spot.category}</span>
                          <p className="text-xs text-stone-400 mt-1 truncate">📍 {spot.coords}</p>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(spot.id); }}
                          className="ml-auto text-stone-300 hover:text-red-500 shrink-0 self-center p-1.5"
                          title="Remover"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12">
                    <Heart className="h-10 w-10 text-stone-200 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-stone-500">Nenhum favorito salvo</p>
                    <p className="text-xs text-stone-400 mt-1">Clique no coração de qualquer destino para salvá-lo aqui.</p>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setShowFavoritesPanel(false)}
              className="w-full rounded-xl bg-stone-900 py-3 text-xs font-bold text-white transition hover:bg-stone-800"
            >
              Fechar Painel
            </button>
          </div>
        </div>
      )}

      {/* SIDEBAR ROTEIRO PANEL */}
      {showItineraryPanel && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end transition-opacity" onClick={() => setShowItineraryPanel(false)}>
          <div
            className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <h3 className="font-bold text-stone-900 text-lg flex items-center gap-1.5">
                  <Map className="h-5 w-5 text-emerald-600" /> Meu Roteiro ({itinerary.length})
                </h3>
                <button onClick={() => setShowItineraryPanel(false)} className="text-stone-400 hover:text-stone-600 transition">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 overflow-y-auto max-h-[70vh] space-y-3 pr-1">
                {itinerary.length > 0 ? (
                  itinerary.map((itinId, idx) => {
                    const spot = allSpots.find((s) => s.id === itinId);
                    if (!spot) return null;
                    return (
                      <div key={spot.id} className="flex gap-3 p-2.5 rounded-xl border border-stone-100 hover:bg-stone-50 transition cursor-pointer" onClick={() => { setActiveId(spot.id); setShowItineraryPanel(false); }}>
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white self-center">
                          {idx + 1}
                        </div>
                        <img
                          src={spot.image || "/images/hero.jpg"}
                          alt={spot.name}
                          className="h-16 w-16 rounded-lg object-cover shrink-0 bg-stone-100"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/hero.jpg";
                          }}
                        />
                        <div className="min-w-0">
                          <h4 className="font-bold text-stone-800 text-sm truncate">{spot.name}</h4>
                          <span className="text-[10px] font-semibold text-stone-700 bg-stone-50 rounded px-1.5 py-0.5">{spot.district}</span>
                          <p className="text-xs text-stone-400 mt-1 truncate">📍 {spot.coords}</p>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleItinerary(spot.id); }}
                          className="ml-auto text-stone-300 hover:text-red-500 shrink-0 self-center p-1.5"
                          title="Remover"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12">
                    <Map className="h-10 w-10 text-stone-200 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-stone-500">Roteiro vazio</p>
                    <p className="text-xs text-stone-400 mt-1">Adicione pontos turísticos usando o botão "+ Roteiro" nos cards.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 mt-4">
              {itinerary.length > 0 && (
                <a
                  href="#roteiro-sec"
                  onClick={() => setShowItineraryPanel(false)}
                  className="w-full rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white transition hover:bg-emerald-700 block text-center shadow-md"
                >
                  Visualizar e Imprimir Roteiro Completo
                </a>
              )}
              <button
                onClick={() => setShowItineraryPanel(false)}
                className="w-full rounded-xl bg-stone-100 py-3 text-xs font-bold text-stone-700 transition hover:bg-stone-200"
              >
                Fechar Painel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showAdminLogin && (
        <LoginModal
          onClose={() => setShowAdminLogin(false)}
          onLogin={() => {
            setShowAdminLogin(false);
            setIsAdminLoggedIn(true);
            setShowAdminPanel(true);
          }}
        />
      )}

      {/* PANEL ADMIN MODAL */}
      {showAdminPanel && (
        <AdminPanel
          spotsList={allSpots}
          onClose={() => setShowAdminPanel(false)}
          onLogout={() => {
            setIsAdminLoggedIn(false);
            setShowAdminPanel(false);
          }}
          onAdd={() => {
            setEditingSpot(null);
            setShowFormModal(true);
          }}
          onEdit={(spot) => {
            setEditingSpot(spot);
            setShowFormModal(true);
          }}
          onDelete={handleDeleteSpot}
        />
      )}

      {/* SPOT FORM MODAL */}
      {showFormModal && (
        <SpotFormModal
          spot={editingSpot}
          onClose={() => {
            setShowFormModal(false);
            setEditingSpot(null);
          }}
          onSave={handleSaveSpot}
        />
      )}
    </div>
  );
}
