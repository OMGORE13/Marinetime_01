import { useMemo, useState } from "react";

type IconName =
  | "anchor"
  | "bell"
  | "box"
  | "chevron"
  | "clock"
  | "dashboard"
  | "driver"
  | "download"
  | "filter"
  | "globe"
  | "menu"
  | "plane"
  | "plus"
  | "route"
  | "search"
  | "settings"
  | "ship"
  | "stamp"
  | "theme"
  | "jet"
  | "train"
  | "truck";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    anchor: (
      <>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v14M5 12H2a10 10 0 0 0 20 0h-3M5 12l-3 3m3-3-3-3m17 3 3 3m-3-3 3-3" />
      </>
    ),
    bell: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />,
    box: (
      <>
        <path d="m21 8-9 5-9-5 9-5 9 5Z" />
        <path d="m3 8 9 5 9-5v8l-9 5-9-5V8Zm9 5v8" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    dashboard: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    driver: (
      <>
        <circle cx="12" cy="7" r="3.5" fill="currentColor" opacity=".16" />
        <circle cx="12" cy="7" r="3.5" />
        <path d="M5 21v-2.5A5.5 5.5 0 0 1 10.5 13h3a5.5 5.5 0 0 1 5.5 5.5V21" />
        <path d="M8.5 17.5 12 20l3.5-2.5M19 5.5c1 .8 1.5 1.8 1.5 3M5 5.5c-1 .8-1.5 1.8-1.5 3" opacity=".65" />
      </>
    ),
    download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />,
    filter: <path d="M4 5h16M7 12h10m-7 7h4" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    plane: (
      <>
        <path d="m22 2-8.5 8.5L5 7l-3 3 7 5-3 4 2 2 4-3 5 4 3-3-3.5-8.5L22 2Z" fill="white" stroke="var(--primary)" />
        <path d="m8.5 13.8 4.6-3.8m-2.8 6.3 4.3-3.5" stroke="var(--primary)" strokeWidth="1.3" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    route: (
      <>
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18h2a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2h2" />
      </>
    ),
    search: <path d="m21 21-4.5-4.5m2.5-5A7.5 7.5 0 1 1 4 11.5a7.5 7.5 0 0 1 15 0Z" />,
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    ship: (
      <>
        <path d="M3 17h18l-3 4H7l-4-4Z" fill="var(--primary)" opacity=".18" />
        <path d="M3 17h18l-3 4H7l-4-4Zm3 0V9h12v8M9 9V5h6v4" />
        <rect x="7" y="10" width="3" height="3" rx=".4" fill="var(--primary)" stroke="none" />
        <rect x="10.5" y="10" width="3" height="3" rx=".4" fill="var(--accent-orange)" stroke="none" />
        <rect x="14" y="10" width="3" height="3" rx=".4" fill="var(--success)" stroke="none" />
        <rect x="9" y="13.5" width="3" height="3" rx=".4" fill="var(--danger)" stroke="none" />
        <rect x="12.5" y="13.5" width="3" height="3" rx=".4" fill="var(--primary)" stroke="none" />
      </>
    ),
    stamp: (
      <>
        <circle cx="12" cy="10" r="6.5" fill="currentColor" opacity=".12" />
        <circle cx="12" cy="10" r="6.5" />
        <path d="m9 10 2 2 4-4M8 16.5 6 21h12l-2-4.5M9 19h6" />
        <path d="M4 10a8 8 0 0 1 1.2-4.2M20 10a8 8 0 0 0-1.2-4.2" opacity=".55" />
      </>
    ),
    theme: (
      <>
        <circle cx="8" cy="8" r="3" />
        <path d="M8 2V1M8 15v-1M2 8H1m14 0h-1M3.8 3.8 3 3m9.2.8L13 3M3.8 12.2 3 13" />
        <path d="M19.5 7.5A6.5 6.5 0 1 0 22 18.7a5.2 5.2 0 0 1-2.5-11.2Z" fill="currentColor" opacity=".14" />
        <path d="M19.5 7.5A6.5 6.5 0 1 0 22 18.7a5.2 5.2 0 0 1-2.5-11.2Z" />
      </>
    ),
    jet: (
      <>
        <path d="m21 3-8.2 7.1-6.9-2.6-2.2 2.1 5.5 4.2-2.8 3.1 1.7 1.7 3.2-2.8 4.1 5.5 2.2-2.2-2.7-6.9L21 3Z" fill="currentColor" opacity=".16" />
        <path d="m21 3-8.2 7.1-6.9-2.6-2.2 2.1 5.5 4.2-2.8 3.1 1.7 1.7 3.2-2.8 4.1 5.5 2.2-2.2-2.7-6.9L21 3Z" />
        <path d="M3 4.5a5 5 0 0 1 5-2M2 1.5h.01M2 7.5h.01" opacity=".65" />
      </>
    ),
    train: (
      <>
        <path d="M3 15.5V10a5 5 0 0 1 5-5h9.5L22 9.5v6H3Z" fill="var(--accent-orange)" opacity=".2" stroke="var(--accent-orange)" />
        <path d="M3 15.5V10a5 5 0 0 1 5-5h9.5L22 9.5v6H3Z" stroke="var(--accent-orange)" />
        <path d="M6 9h9.5l2.5 2.5H6V9Z" fill="var(--accent-orange)" stroke="none" />
        <path d="M2 18h20M6 21l3-3m6 0 3 3M9 21h6" stroke="var(--accent-orange)" />
        <circle cx="6" cy="15.5" r="1.2" fill="var(--accent-orange)" stroke="none" />
        <circle cx="19" cy="15.5" r="1.2" fill="var(--accent-orange)" stroke="none" />
      </>
    ),
    truck: (
      <>
        <path d="M3 5h11v12H3Z" fill="var(--primary)" stroke="var(--primary)" />
        <path d="M14 10h4l3 4v3h-7Z" fill="var(--danger)" stroke="var(--danger)" />
        <path d="M16.5 12H18l1.5 2h-3Z" fill="white" stroke="none" />
        <path d="M5 8h7" stroke="white" opacity=".8" />
        <circle cx="7" cy="19" r="2.25" fill="var(--navy)" stroke="white" />
        <circle cx="18" cy="19" r="2.25" fill="var(--navy)" stroke="white" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const shipments = [
  {
    id: "MSKU 7439821",
    vessel: "Maersk Elba",
    type: "40' Dry Container",
    from: "Shanghai, CN",
    to: "Rotterdam, NL",
    status: "In transit",
    customs: "Pre-cleared",
    eta: "18 Sep",
    progress: 68,
    mode: "ship" as IconName,
    pcsEvent: "Discharge completed",
    pcsDetail: "Mundra CT-4 · 14:28 IST",
    icegateStatus: "Out of charge",
    icegateDetail: "BE 4819201 · RMS facilitated",
    signal: "Updated 18 sec ago",
  },
  {
    id: "TCLU 2941057",
    vessel: "MSC Vega",
    type: "20' Reefer",
    from: "Singapore, SG",
    to: "Hamburg, DE",
    status: "At port",
    customs: "Under review",
    eta: "21 Sep",
    progress: 42,
    mode: "ship" as IconName,
    pcsEvent: "Discharge in progress",
    pcsDetail: "JNPT BMCT · 62 of 118 units",
    icegateStatus: "Assessment pending",
    icegateDetail: "BE 4819236 · First check",
    signal: "Updated 32 sec ago",
  },
  {
    id: "AIR 176-839201",
    vessel: "EK 504",
    type: "Air freight",
    from: "Dubai, UAE",
    to: "Mumbai, IN",
    status: "In transit",
    customs: "Approved",
    eta: "Today",
    progress: 81,
    mode: "plane" as IconName,
    pcsEvent: "Not applicable · Air",
    pcsDetail: "BOM Cargo Terminal",
    icegateStatus: "Out of charge",
    icegateDetail: "BE 4819184 · Cleared",
    signal: "Updated 12 sec ago",
  },
  {
    id: "CMAU 5108820",
    vessel: "CMA CGM Jules",
    type: "40' High Cube",
    from: "Los Angeles, US",
    to: "Antwerp, BE",
    status: "Delayed",
    customs: "Documents due",
    eta: "26 Sep",
    progress: 31,
    mode: "ship" as IconName,
    pcsEvent: "Vessel arrival filed",
    pcsDetail: "Antwerp DP World · Awaiting berth",
    icegateStatus: "Documents required",
    icegateDetail: "Query raised · Importer action",
    signal: "Updated 1 min ago",
  },
];

const navItems: { label: string; icon: IconName }[] = [
  { label: "Overview", icon: "dashboard" },
  { label: "Shipments", icon: "box" },
  { label: "Vessels", icon: "ship" },
  { label: "Ports & Offshore", icon: "anchor" },
  { label: "Customs", icon: "globe" },
  { label: "Rail & Road", icon: "train" },
  { label: "Air Cargo", icon: "plane" },
  { label: "Settings", icon: "settings" },
];

const portInformation = [
  {
    label: "Mundra Port",
    code: "INMUN",
    x: "63%",
    y: "53%",
    berth: "12 of 14 occupied",
    congestion: "Low · 1 hour delay",
    capacity: "91%",
    movement: "Customs clearing",
    offshoreAsset: "Rig Alpha · Online",
    telemetry: "PCS, AIS and terminal telemetry active",
  },
  {
    label: "JNPT",
    code: "INNSA",
    x: "66%",
    y: "59%",
    berth: "6 of 8 occupied",
    congestion: "Moderate · 4 hour delay",
    capacity: "84%",
    movement: "FOIS rake loading",
    offshoreAsset: "OSV-1 · Active",
    telemetry: "PCS and gate telemetry active",
  },
  {
    label: "Chennai Port",
    code: "INMAA",
    x: "71%",
    y: "66%",
    berth: "5 of 7 occupied",
    congestion: "Moderate · 3 hour delay",
    capacity: "76%",
    movement: "Inbound vessel discharge",
    offshoreAsset: "Platform Echo · Standby",
    telemetry: "PCS and offshore feed active",
  },
  {
    label: "Singapore PSA",
    code: "SGSIN",
    x: "78%",
    y: "70%",
    berth: "18 of 24 occupied",
    congestion: "Low · 45 minute delay",
    capacity: "79%",
    movement: "Transshipment loading",
    offshoreAsset: "Harbour OSV-7 · Active",
    telemetry: "AIS and terminal telemetry active",
  },
];

const moduleContent: Record<
  string,
  {
    eyebrow: string;
    title: string;
    description: string;
    stats: { label: string; value: string; note: string }[];
    columns: string[];
    rows: string[][];
  }
> = {
  Vessels: {
    eyebrow: "AIS & vessel registry",
    title: "Vessel intelligence",
    description: "Track identity, position, flag, class and voyage status across the fleet.",
    stats: [
      { label: "Tracked vessels", value: "36", note: "12 via JNPT Channels" },
      { label: "Underway", value: "28", note: "8 Routing via Mundra" },
      { label: "At anchorage", value: "5", note: "3 Inbound to Chennai" },
    ],
    columns: ["Vessel / IMO", "Flag & type", "Last position", "Speed", "Voyage status"],
    rows: [
      ["Maersk Elba · IMO 9458078", "Denmark [DK] - Container", "14.082°N, 72.881°E", "17.4 kn", "Underway"],
      ["MSC Vega · IMO 9282132", "Liberia · Container", "1.248°N, 103.802°E", "0.2 kn", "At anchorage"],
      ["CMA CGM Jules Verne - IMO 9454450", "France [FR] - Container", "10.1245° N, 76.2104° E", "18.2 kn", "Underway"],
    ],
  },
  "Ports & Offshore": {
    eyebrow: "Port community view",
    title: "Ports & offshore operations",
    description: "Monitor berths, terminals, offshore assets, congestion and port-call milestones.",
    stats: [
      { label: "Connected ports", value: "18", note: "7 major Indian ports" },
      { label: "Port calls today", value: "42", note: "9 awaiting berth" },
      { label: "Offshore assets", value: "11", note: "All reporting" },
    ],
    columns: ["Port / Facility", "LOCODE", "Berth Status", "Congestion", "Next Movement", "PORT & OFFSHORE ASSETS"],
    rows: [
      ["Jawaharlal Nehru Port (JNPT)", "INNSA", "6 of 8 Occupied", "Moderate (4h delay)", "Rake Loading", "View Terminal Map & Telemetry"],
      ["Mundra Port (APSEZ)", "INMUN", "12 of 14 Occupied", "Low (1h delay)", "Customs Clearing", "View Terminal Map & Telemetry"],
      ["Chennai Port Container Terminal", "INMAA", "5 of 7 Occupied", "Moderate (3h delay)", "Track Inbound", "View Terminal Map & Telemetry"],
    ],
  },
  Customs: {
    eyebrow: "ICEGATE & regulatory workflow",
    title: "Customs clearance",
    description: "Follow bills of entry, shipping bills, inspections, holds and release decisions.",
    stats: [
      { label: "Filed today", value: "57", note: "43 auto-validated" },
      { label: "Approved", value: "39", note: "68.4% clearance rate" },
      { label: "Action required", value: "6", note: "Documents or inspection" },
    ],
    columns: ["Reference", "Cargo / IEC", "Port", "Assessment", "Customs status"],
    rows: [
      ["BE 4819201 · 16 Sep", "Machinery · IEC 0388••••", "INNSA", "RMS facilitated", "Out of charge"],
      ["SB 7710284 · 16 Sep", "Pharmaceuticals · IEC 0592••••", "INMUN", "Self-sealed", "Let export order"],
      ["BE 4819236 - 16 Sep", "Electronic parts - IEC 0281", "INMAA", "First check", "Under assessment"],
      ["BE 4819268 - 16 Sep", "Industrial chemicals - IEC 0614", "INNSA", "PGA review", "Documents required"],
    ],
  },
  "Rail & Road": {
    eyebrow: "Indian Railways freight & first/last mile",
    title: "Rail & road control tower",
    description: "FOIS-aligned view for rakes, wagon allocation, terminal handoffs, road legs and proof-of-delivery milestones.",
    stats: [
      { label: "Active FOIS rakes", value: "12", note: "9 container rakes" },
      { label: "Wagons allocated", value: "486", note: "462 loaded · 24 empty" },
      { label: "Terminal handoffs", value: "31", note: "27 completed on time" },
    ],
    columns: ["FOIS rake number", "Wagon allocation ID", "Commodity / load", "Current railway location", "ETA"],
    rows: [
      ["FOIS RKE-WR-240916-MUN-04", "WAID-WR-CONT-88421", "42 containers · 3,180 t", "Samakhiali Jn (SIOB)", "17 Sep · 04:40"],
      ["FOIS RKE-WR-240916-MUN-07", "WAID-WR-CONT-88439", "40 containers · 2,940 t", "Gandhidham BG (GIMB)", "17 Sep · 09:15"],
      ["FOIS RKE-WR-240915-PIP-12", "WAID-WR-CONT-88376", "38 containers · 2,710 t", "Ahmedabad Jn (ADI)", "Today · 23:20"],
      ["FOIS RKE-WR-240916-JNPT-03", "WAID-WR-CONT-88454", "45 containers · 3,420 t", "Vadodara Jn (BRC)", "17 Sep · 02:10"],
    ],
  },
  "Air Cargo": {
    eyebrow: "Air waybill visibility",
    title: "Air cargo control",
    description: "Track master and house AWBs, flights, ULDs, handling events and delivery orders.",
    stats: [
      { label: "Active AWBs", value: "18", note: "24.6 tonnes" },
      { label: "In flight", value: "7", note: "4 international" },
      { label: "Handling", value: "8", note: "2 awaiting customs" },
    ],
    columns: ["AWB / Flight", "Cargo", "Route", "Latest event", "ETA"],
    rows: [
      ["176-839201 · EK 504", "Electronics · 2,840 kg", "DXB → BOM", "Departed DXB", "Today · 18:15"],
      ["098-114728 · AI 188", "Pharma · 1,220 kg", "LHR → DEL", "Temperature verified", "Today · 22:40"],
      ["618-882901 · SQ 406", "Machine parts · 4,110 kg", "SIN → DEL", "ULD loaded", "17 Sep · 05:55"],
      ["125-719830 · BA 139", "General cargo · 980 kg", "LHR → BOM", "Security screened", "17 Sep · 08:20"],
    ],
  },
};

const simulatedUlipPayload = {
  schema_version: "om.ulip.ingestion.v1.0",
  simulation_notice: "DEMO PAYLOAD — NOT RECEIVED FROM A LIVE GOVERNMENT API",
  request: {
    correlation_id: "om-demo-req-240916-0842",
    requested_at: "2025-09-16T14:32:18+05:30",
    environment: "stakeholder_sandbox",
    consent_scope: ["maritime_tracking", "customs_status", "rail_freight"],
  },
  consignment: {
    om_reference: "OM-IOC-240916-0842",
    container_number: "MSKU7439821",
    bill_of_lading: "MAEU-DEMO-884210",
    iso_equipment_code: "42G1",
    cargo: {
      description: "Industrial machinery parts",
      hs_code: "84798999",
      package_count: 22,
      gross_weight_kg: 18460,
      dangerous_goods: false,
    },
  },
  maritime: {
    source_system: "PCS_SIMULATOR",
    vessel: {
      imo_number: "9458078",
      mmsi: "219018271",
      vessel_name: "MAERSK ELBA",
      flag: "DK",
      voyage_number: "ME2409E",
    },
    port_call: {
      port_unlocode: "INMUN",
      terminal_code: "MCT4",
      berth: "CT-4",
      ata: "2025-09-16T08:10:00+05:30",
      discharge_status: "COMPLETED",
      discharge_completed_at: "2025-09-16T14:28:00+05:30",
      equipment_interchange_receipt: "EIR-DEMO-772184",
    },
    position: {
      latitude: 22.7441,
      longitude: 69.6887,
      course_degrees: 0,
      speed_knots: 0.1,
      recorded_at: "2025-09-16T14:31:42+05:30",
    },
  },
  customs: {
    source_system: "ICEGATE_SIMULATOR",
    bill_of_entry: {
      number: "4819201",
      date: "2025-09-16",
      location_code: "INMUN1",
      importer_iec_masked: "0388****",
      assessment_type: "RMS_FACILITATED",
      clearance_status: "OUT_OF_CHARGE",
      out_of_charge_at: "2025-09-16T13:52:11+05:30",
    },
    compliance: {
      pga_noc_required: false,
      examination_required: false,
      document_verification: "VERIFIED",
      risk_indicator: "LOW",
    },
  },
  rail: {
    source_system: "FOIS_SIMULATOR",
    fois_rake_number: "RKE-WR-240916-MUN-04",
    wagon_allocation_id: "WAID-WR-CONT-88421",
    operator: "INDIAN_RAILWAYS",
    railway_zone: "WR",
    rake_composition: {
      wagon_type: "BLC",
      allocated_wagons: 42,
      loaded_wagons: 42,
      gross_train_load_tonnes: 3180,
    },
    route: {
      origin: { station_code: "MDPR", name: "Mundra Port Siding" },
      checkpoints: [
        { station_code: "GIMB", name: "Gandhidham BG", event: "RAKE_FORMED", event_at: "2025-09-16T20:10:00+05:30" },
        { station_code: "SIOB", name: "Samakhiali Jn", event: "PASSED", event_at: "2025-09-16T23:48:00+05:30" },
        { station_code: "ADI", name: "Ahmedabad Jn", event: "CREW_INTERCHANGE", estimated_at: "2025-09-17T02:20:00+05:30" },
      ],
      destination: { station_code: "DRT", name: "ICD Dashrath, Vadodara" },
      estimated_arrival: "2025-09-17T04:40:00+05:30",
    },
  },
  ingestion: {
    received_at: "2025-09-16T14:32:18.284+05:30",
    pipeline_status: "VALIDATED",
    validation_errors: [],
    idempotency_key: "demo-sha256:7c91...e842",
    data_classification: "STAKEHOLDER_DEMO",
  },
};

const portsOffshorePayload = {
  schema_version: "om.ulip.ports-offshore.v1.0",
  mode: "sandbox",
  generated_at: "2025-09-16T14:32:18+05:30",
  source_connectors: ["ULIP_SANDBOX", "PCS_SIMULATOR", "PORT_TELEMETRY"],
  records: [
    {
      port_code: "INNSA",
      port_name: "Jawaharlal Nehru Port (JNPT)",
      berth_utilization: { occupied: 6, total: 8, percentage: 84 },
      congestion_hours: 4,
      next_movement: "Rake Loading",
      telemetry_pill: {
        label: "View Terminal Map & Telemetry",
        indicator: "ACTIVE",
        offshore_asset: "OSV-1",
      },
    },
    {
      port_code: "INMUN",
      port_name: "Mundra Port (APSEZ)",
      berth_utilization: { occupied: 12, total: 14, percentage: 91 },
      congestion_hours: 1,
      next_movement: "Customs Clearing",
      telemetry_pill: {
        label: "View Terminal Map & Telemetry",
        indicator: "ONLINE",
        offshore_asset: "Rig Alpha",
      },
    },
    {
      port_code: "INMAA",
      port_name: "Chennai Port Container Terminal",
      berth_utilization: { occupied: 5, total: 7, percentage: 76 },
      congestion_hours: 3,
      next_movement: "Track Inbound",
      telemetry_pill: {
        label: "View Terminal Map & Telemetry",
        indicator: "STANDBY",
        offshore_asset: "Platform Echo",
      },
    },
  ],
  ingestion: {
    validation_status: "VALID",
    record_count: 3,
    correlation_id: "om-port-sbx-240916-143218",
  },
};

const activeContainerPayload = {
  container_id: "MSKU7439821",
  commodity_type: "40_ISO_Container_FCL",
  pcs_sync_status: "VERIFIED",
  icegate_clearance: "OUT_OF_CHARGE",
  fois_rake_allocation: "ACTIVE",
};

function JsonCodeBlock({ payload }: { payload: object }) {
  return (
    <pre className="json-code-block min-w-[720px] p-5 font-mono text-xs leading-6 whitespace-pre">
      {JSON.stringify(payload, null, 2).split("\n").map((line, index) => {
        const match = line.match(/^(\s*)("[^"]+")(:\s)?(.*)$/);
        if (!match) {
          return <div key={index} className="text-white/55">{line || " "}</div>;
        }

        const [, indent, key, separator = "", remainder] = match;
        const valueClass = remainder.trim().startsWith('"')
          ? "text-[#e9b872]"
          : remainder.trim().match(/^(true|false|null)/)
            ? "text-[#d39ee8]"
            : "text-[#84d8c9]";

        return (
          <div key={index}>
            <span>{indent}</span>
            <span className="text-[#72d5e8]">{key}</span>
            <span className="text-white/45">{separator}</span>
            <span className={valueClass}>{remainder}</span>
          </div>
        );
      })}
    </pre>
  );
}

function ModuleWorkspace({
  module,
  onAction,
  onShipment,
  onRawExport,
}: {
  module: string;
  onAction: (message: string) => void;
  onShipment: (shipment: (typeof shipments)[number]) => void;
  onRawExport: (module: string) => void;
}) {
  const [crewProfileOpen, setCrewProfileOpen] = useState(false);
  const [vesselTelemetryOpen, setVesselTelemetryOpen] = useState(false);
  const [flightTelemetryOpen, setFlightTelemetryOpen] = useState(false);
  const [liveAirspaceOpen, setLiveAirspaceOpen] = useState(false);
  const [airCustomsOpen, setAirCustomsOpen] = useState(false);
  const [portDirectoryQuery, setPortDirectoryQuery] = useState("");
  const [verifiedPortOpen, setVerifiedPortOpen] = useState(false);
  const [terminalMetricsOpen, setTerminalMetricsOpen] = useState(false);
  const [fleetVehicleOpen, setFleetVehicleOpen] = useState(false);
  const [driverTelematicsOpen, setDriverTelematicsOpen] = useState(false);
  const [roadFleetSearch, setRoadFleetSearch] = useState("");
  const [roadFleetSegment, setRoadFleetSegment] = useState<"vehicle" | "driver">("vehicle");

  if (module === "Shipments") {
    const containerStreams = [
      {
        id: "MSKU 7439821",
        vessel: "Maersk Elba",
        voyage: "ME2409E · IMO 9458078",
        sector: "Arabian Sea → Mundra",
        phase: "Vessel approach",
        customs: "Out of charge",
        customsTone: "success",
        rake: "RKE-WR-240916-MUN-04",
        wagon: "BLC-88421",
        velocity: "17.4 kn",
        mode: "Sea transit",
      },
      {
        id: "TCLU 2941057",
        vessel: "MSC Vega",
        voyage: "MV2416W · IMO 9282132",
        sector: "Mundra CT-4 Berth",
        phase: "PCS discharge",
        customs: "Assessment pending",
        customsTone: "warning",
        rake: "Allocation pending",
        wagon: "FOIS request submitted",
        velocity: "0.2 kn",
        mode: "Alongside berth",
      },
      {
        id: "CMAU 5108820",
        vessel: "CMA CGM Jules",
        voyage: "CJ118E · IMO 9839181",
        sector: "Samakhiali Rail Corridor",
        phase: "Rail line haul",
        customs: "Out of charge",
        customsTone: "success",
        rake: "RKE-WR-240916-MUN-07",
        wagon: "BLC-88439",
        velocity: "62 km/h",
        mode: "Indian Railways",
      },
      {
        id: "MAEU 8842193",
        vessel: "Maersk Cape Town",
        voyage: "MC882S · IMO 9525405",
        sector: "ICD Dashrath, Vadodara",
        phase: "Road final mile",
        customs: "Documents verified",
        customsTone: "info",
        rake: "RKE-WR-240915-MUN-02",
        wagon: "Unloaded · DRT",
        velocity: "46 km/h",
        mode: "Road connection",
      },
    ];

    return (
      <section>
        <div className="module-heading mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 text-xs font-bold tracking-[0.14em] text-[var(--teal)] uppercase">Indian Ocean container intelligence</div>
            <h1 className="text-3xl font-bold tracking-tight">Active container streams</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">Continuous vessel, PCS, ICEGATE and FOIS visibility across maritime and inland transport phases.</p>
          </div>
          <button type="button" onClick={() => onRawExport(module)} className="raw-export-trigger flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3.5 text-center text-xs font-bold text-white shadow-lg shadow-[var(--navy-shadow)]">
            📥 Export Raw Data payload [JSON Mode]
          </button>
        </div>

        <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow-hover)]">
          <div className="flex flex-col gap-3 bg-[var(--navy)] px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-white/10 text-[var(--aqua)]"><Icon name="box" size={18} /></span>
              <div>
                <h2 className="text-sm font-bold">Indian Ocean container tracking ledger</h2>
                <p className="mt-0.5 text-[10px] text-white/45">4 Inbound Core Corridors — Active Multi-Modal Ledger Profiles</p>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-white/45">Last synchronized 14:32 IST</span>
          </div>
          <div className="mobile-records space-y-3 p-3 md:hidden">
            {containerStreams.map((stream, index) => (
              <button
                type="button"
                key={stream.id}
                onClick={() => onShipment(shipments[index])}
                className="w-full overflow-hidden rounded-2xl bg-[var(--canvas)] text-left"
              >
                <span className="block p-4">
                  <span className="flex items-start justify-between gap-3">
                    <span>
                      <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Primary Reference Code</span>
                      <span className="mt-1 block text-base font-bold text-[var(--navy)]">{stream.id}</span>
                    </span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--teal)]"><Icon name="box" size={17} /></span>
                  </span>
                  <span className="mt-4 flex flex-col gap-3">
                    <span className="block">
                      <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Commodity Type</span>
                      <span className="mt-1 block text-xs font-semibold">40' ISO Container · FCL</span>
                    </span>
                    <span className="block">
                      <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Port / Sector</span>
                      <span className="mt-1 block text-xs font-semibold">{stream.sector}</span>
                    </span>
                  </span>
                  <span className="mt-4 block text-xs text-[var(--muted)]">{stream.vessel} · {stream.phase}</span>
                </span>
                <span className={`flex items-center justify-between px-4 py-3 text-xs font-bold ${
                  stream.customsTone === "success"
                    ? "bg-[var(--success)] text-white"
                    : stream.customsTone === "warning"
                      ? "bg-[var(--warning)] text-white"
                      : "bg-[var(--teal)] text-white"
                }`}>
                  {stream.customs}
                  <Icon name="chevron" size={15} />
                </span>
              </button>
            ))}
          </div>
          <div className="desktop-ledger hidden overflow-x-auto md:block">
            <table className="w-full min-w-[1150px] border-collapse">
              <thead>
                <tr className="bg-[var(--canvas)] text-left text-[10px] font-bold tracking-[0.1em] text-[var(--muted)] uppercase">
                  <th className="px-5 py-4">Container ID</th>
                  <th className="px-5 py-4">Vessel Name</th>
                  <th className="px-5 py-4">Current Sector</th>
                  <th className="min-w-52 px-7 py-4">ICEGATE Customs Status</th>
                  <th className="min-w-80 px-6 py-4 whitespace-nowrap">Transit Velocity &amp; Rake</th>
                </tr>
              </thead>
              <tbody>
                {containerStreams.map((stream, index) => (
                  <tr
                    key={stream.id}
                    onClick={() => onShipment(shipments[index])}
                    className="cursor-pointer border-t border-[var(--line)] transition hover:bg-[var(--canvas)]"
                  >
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--teal)]"><Icon name="box" size={18} /></span>
                        <div>
                          <div className="text-sm font-bold text-[var(--navy)]">{stream.id}</div>
                          <div className="mt-1 text-[10px] font-semibold text-[var(--muted)]">40' ISO · FCL</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5">
                      <div className="text-sm font-bold">{stream.vessel}</div>
                      <div className="mt-1 text-[10px] text-[var(--muted)]">{stream.voyage}</div>
                    </td>
                    <td className="px-5 py-5">
                      <div className="text-sm font-semibold">{stream.sector}</div>
                      <div className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold text-[var(--teal)]"><Icon name="route" size={12} /> {stream.phase}</div>
                    </td>
                    <td className="min-w-52 px-7 py-5">
                      <span className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold whitespace-nowrap ${
                        stream.customsTone === "success"
                          ? "bg-[var(--success-soft)] text-[var(--success)]"
                          : stream.customsTone === "warning"
                            ? "bg-[var(--warning-soft)] text-[var(--warning)]"
                            : "bg-[var(--aqua-soft)] text-[var(--teal)]"
                      }`}>{stream.customs}</span>
                    </td>
                    <td className="min-w-80 px-6 py-5">
                      <div className="flex items-center gap-5">
                        <span className="signal-bars" aria-hidden="true"><i /><i /><i /></span>
                        <div className="min-w-20">
                          <div className="text-sm font-bold">{stream.velocity}</div>
                          <div className="mt-1 text-[10px] text-[var(--muted)]">{stream.mode}</div>
                        </div>
                        <span className="h-8 w-px shrink-0 bg-[var(--line)]" />
                        <div>
                          <div className="text-xs font-bold whitespace-nowrap text-[var(--navy)]">{stream.rake}</div>
                          <div className="mt-1 text-[10px] whitespace-nowrap text-[var(--muted)]">{stream.wagon}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between bg-[var(--canvas)] px-5 py-3 text-[10px] text-[var(--muted)]">
            <span>Showing 4 of 248 active container streams</span>
            <button type="button" onClick={() => onAction("Full container registry opened")} className="font-bold text-[var(--teal)]">Open complete registry</button>
          </div>
        </article>
      </section>
    );
  }

  const content = moduleContent[module];
  if (!content) return null;

  return (
    <section>
      <div className="module-heading mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 text-xs font-bold tracking-[0.14em] text-[var(--teal)] uppercase">{content.eyebrow}</div>
          <h1 className="text-3xl font-bold tracking-tight">{content.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">{content.description}</p>
        </div>
        <button type="button" onClick={() => onRawExport(module)} className="raw-export-trigger flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--primary)] px-5 py-3.5 text-center text-xs font-bold text-white shadow-lg shadow-[var(--navy-shadow)]">
          📥 Export Raw Data payload [JSON Mode]
        </button>
      </div>

      <div className="mobile-metrics mb-5 grid gap-3 md:mb-6 md:grid-cols-3 md:gap-4">
        {content.stats.map((stat) => (
          <article key={stat.label} className="grid grid-cols-[auto_1fr] items-center gap-x-4 rounded-2xl bg-white p-4 shadow-[var(--card-shadow)] md:block md:p-5">
            <div className="metric-value row-span-2 text-3xl font-bold tracking-tight text-[var(--navy)] md:text-[var(--ink)]">{stat.value}</div>
            <div className="metric-label text-sm font-bold text-[var(--ink)] md:mt-3 md:text-xs md:font-semibold md:text-[var(--muted)]">{stat.label}</div>
            <div className="metric-note mt-1 text-[10px] font-semibold text-[var(--teal)] md:mt-3 md:text-xs">{stat.note}</div>
          </article>
        ))}
      </div>

      {module === "Air Cargo" && (
        <section className="mb-6 overflow-hidden rounded-2xl bg-[var(--navy)] text-white shadow-[var(--card-shadow-hover)]">
          <div className="border-b border-white/10 px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--info)] text-white shadow-[0_0_18px_var(--info-glow)]">
                <Icon name="jet" size={21} />
              </span>
              <div className="min-w-0">
                <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Active AWB · AI-99042-DEL</div>
                <h2 className="mt-1 text-base leading-5 font-bold">Live Flight Telemetry &amp; Airspace Progress</h2>
              </div>
            </div>
          </div>

          <div className="relative px-4 py-4">
            <span className="absolute top-6 bottom-6 left-7 w-px bg-white/15" aria-hidden="true" />
            <div className="relative space-y-4">
              <div className="flex items-start gap-3">
                <span className="z-[1] grid size-6 shrink-0 place-items-center rounded-full bg-[var(--success)] text-[10px] font-black text-white shadow-[0_0_12px_var(--success-glow)]">✓</span>
                <div className="min-w-0 pt-0.5 text-xs leading-5 font-semibold text-white/85">
                  Origin Gate: JFK Intl Terminal 4 — Departed: 08:30 AM
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="z-[1] grid size-6 shrink-0 place-items-center rounded-full bg-[var(--success)] text-[10px] font-black text-white shadow-[0_0_12px_var(--success-glow)]">✓</span>
                <div className="min-w-0 pt-0.5 text-xs leading-5 font-semibold text-white/85">
                  Oceanic Corridor Exit — Passed Waypoint: 11:45 AM
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="corridor-radar z-[1] mt-1 size-6 shrink-0 rounded-full border-4 border-[var(--navy)] bg-[var(--info)] shadow-[0_0_18px_var(--info-glow)]" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => setLiveAirspaceOpen((open) => !open)}
                    className="flex w-full items-start justify-between gap-2 rounded-xl border border-[var(--info)]/40 bg-[var(--info)]/15 px-3 py-2.5 text-left text-xs leading-5 font-black text-[var(--aqua)] transition hover:bg-[var(--info)]/25"
                    aria-expanded={liveAirspaceOpen}
                  >
                    <span className="min-w-0">[✈️ Click to Track Live Airspace Status]</span>
                    <span className={`mt-0.5 shrink-0 transition-transform ${liveAirspaceOpen ? "rotate-90" : ""}`}>
                      <Icon name="chevron" size={15} />
                    </span>
                  </button>

                  {liveAirspaceOpen && (
                    <div className="mt-2 rounded-xl border border-[var(--info)]/35 bg-white/7 p-3 shadow-[0_0_18px_var(--info-glow)]">
                      <div className="mb-1.5 flex items-center gap-2 text-[9px] font-black tracking-wider text-[var(--aqua)] uppercase">
                        <span className="corridor-radar size-2 rounded-full bg-[var(--info)]" />
                        ADS-B telemetry live
                      </div>
                      <p className="break-words text-[11px] leading-5 font-semibold text-white/90">
                        Current Location: Approving Delhi IGIA Flight Information Region (FIR) Corridor | Aircraft: Boeing 777-200F | Live Speed: 480 knots | Altitude: 34,000 feet
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="z-[1] mt-1 size-6 shrink-0 rounded-full border-4 border-[var(--navy)] bg-[var(--muted-light)]" aria-hidden="true" />
                <div className="min-w-0 pt-0.5 text-xs leading-5 font-semibold text-white/40">
                  Target Hub: IGIA Delhi Cargo Terminal T2 — Scheduled Arrival ETA: 04:30 PM Today
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {module === "Vessels" && (
        <section className="mb-6 overflow-hidden rounded-2xl bg-[var(--navy)] text-white shadow-[var(--card-shadow-hover)]">
          <div className="px-5 py-5">
            <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Vessel operations authority</div>
            <h2 className="mt-1 text-lg font-bold">Vessel Commander &amp; Telemetry Matrix</h2>
            <p className="mt-1 text-[11px] leading-5 text-white/45">Verified command identity and real-time carrier positioning</p>
          </div>

          <div className="space-y-4 bg-[var(--canvas)] p-3">
            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setCrewProfileOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left"
                aria-expanded={crewProfileOpen}
              >
                <span className="min-w-0 break-words text-xs font-black leading-5 text-[var(--navy)]">[⚓ Click to View Master Crew Profile]</span>
                <span className={`shrink-0 text-[var(--teal)] transition-transform ${crewProfileOpen ? "rotate-90" : ""}`}><Icon name="chevron" size={17} /></span>
              </button>

              {crewProfileOpen && (
                <div className="border-t border-[var(--line)] bg-[var(--aqua-soft)] p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--navy)] text-[var(--aqua)]"><Icon name="anchor" size={19} /></span>
                    <div>
                      <div className="text-[9px] font-bold tracking-wider text-[var(--teal)] uppercase">Command profile verified</div>
                      <div className="mt-1 text-sm font-bold text-[var(--navy)]">Captain Rajeev Sharma</div>
                    </div>
                  </div>
                  <p className="break-words text-xs leading-5 text-[var(--ink)]">
                    Vessel Master: <b>Captain Rajeev Sharma</b> | Marine Credentials: <b>Class 1 Master Mariner (FG)</b> | Operational Status: <b>Command Verified via Port Authority Logs</b>
                  </p>
                </div>
              )}
            </article>

            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setVesselTelemetryOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left"
                aria-expanded={vesselTelemetryOpen}
              >
                <span className="min-w-0 break-words text-xs font-black leading-5 text-[var(--navy)]">[🌐 Click to View Core Vessel Telemetry]</span>
                <span className={`shrink-0 text-[var(--info)] transition-transform ${vesselTelemetryOpen ? "rotate-90" : ""}`}><Icon name="chevron" size={17} /></span>
              </button>

              {vesselTelemetryOpen && (
                <div className="border-t border-[var(--line)] bg-[var(--navy)] p-4 text-white">
                  <div className="mb-4 flex items-start gap-3">
                    <span className="corridor-radar grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--info)] text-white"><Icon name="ship" size={19} /></span>
                    <div className="min-w-0">
                      <div className="text-[9px] font-bold tracking-wider text-[var(--aqua)] uppercase">Active carrier position</div>
                      <div className="mt-1 break-words text-sm font-bold">MV Indian Ocean Trader</div>
                    </div>
                  </div>
                  <p className="break-words text-xs leading-5 text-white/70">
                    Carrier Identity: <b className="text-white">MV Indian Ocean Trader - IMO 9876543</b> | Current Sector: <b className="text-white">Arabian Sea Approach Channels</b> | Operational State: <b className="text-[var(--aqua)]">ON PORT / AT BERTH B-12 (Mundra Container Terminal)</b>
                  </p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[92%] rounded-full bg-[var(--aqua)]" />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[9px] font-bold">
                    <span className="text-[var(--aqua)]">TELEMETRY RECEIVING</span>
                    <span className="text-white/35">Updated 8 sec ago</span>
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      {module === "Air Cargo" && (
        <section className="mb-6 overflow-hidden rounded-2xl bg-[var(--navy)] text-white shadow-[var(--card-shadow-hover)]">
          <div className="px-5 py-5">
            <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Air cargo command intelligence</div>
            <h2 className="mt-1 text-lg font-bold">Flight Telemetry &amp; Customs Matrix</h2>
            <p className="mt-1 text-[11px] leading-5 text-white/45">Flight crew, airspace position and ACC clearance verification</p>
          </div>

          <div className="space-y-4 bg-[var(--canvas)] p-3">
            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setFlightTelemetryOpen((open) => !open)}
                className="flex w-full items-center gap-3 rounded-2xl border border-[var(--info)]/25 p-4 text-left transition hover:bg-[var(--info-soft)]"
                aria-expanded={flightTelemetryOpen}
              >
                <span className="corridor-radar grid size-12 shrink-0 place-items-center rounded-full bg-[var(--info)] text-white shadow-[0_0_18px_var(--info-glow)]">
                  <Icon name="jet" size={25} />
                </span>
                <span className="min-w-0 flex-1 break-words text-xs font-black leading-5 text-[var(--navy)]">[✈️ Click to View Flight &amp; Crew Telemetry]</span>
              </button>

              {flightTelemetryOpen && (
                <div className="border-t border-[var(--line)] bg-[var(--navy)] p-4 text-white">
                  <div className="mb-4 flex items-start gap-3">
                    <span className="corridor-radar grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--info)] text-white"><Icon name="jet" size={23} /></span>
                    <div className="min-w-0">
                      <div className="text-[9px] font-bold tracking-wider text-[var(--aqua)] uppercase">Live flight command stream</div>
                      <div className="mt-1 text-sm font-bold">AI-101 · Air India Cargo</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      ["Aircraft Type", "Boeing 777-200F Freighter"],
                      ["Flight ID", "AI-101 (Air India Cargo)"],
                      ["Pilot in Command", "Captain Vikram Malhotra (Senior Commander)"],
                      ["Live Airspace Location", "23.0225° N, 72.5714° E (Approving Ahmedabad Flight Information Region Corridor at 34,000 feet, Velocity: 480 knots)"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white/7 p-3">
                        <div className="text-[9px] font-bold tracking-wider text-white/35 uppercase">{label}</div>
                        <div className="mt-1 break-words text-xs leading-5 font-semibold text-white">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-[var(--info)]/20 px-3 py-2.5 text-[9px] font-bold">
                    <span className="text-[var(--aqua)]">ADS-B TELEMETRY ACTIVE</span>
                    <span className="text-white/40">34,000 FT · 480 KT</span>
                  </div>
                </div>
              )}
            </article>

            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setAirCustomsOpen((open) => !open)}
                className="flex w-full items-center gap-3 rounded-2xl border border-[var(--success)]/25 p-4 text-left transition hover:bg-[var(--success-soft)]"
                aria-expanded={airCustomsOpen}
              >
                <span className="corridor-radar grid size-12 shrink-0 place-items-center rounded-full bg-[var(--success)] text-white shadow-[0_0_18px_var(--success-glow)]">
                  <Icon name="stamp" size={25} />
                </span>
                <span className="min-w-0 flex-1 break-words text-xs font-black leading-5 text-[var(--navy)]">[🛃 Click to View Air Customs &amp; Cargo Compliance]</span>
              </button>

              {airCustomsOpen && (
                <div className="border-t border-[var(--line)] bg-[var(--aqua-soft)] p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--success)] text-white shadow-[0_0_16px_var(--success-glow)]"><Icon name="stamp" size={23} /></span>
                    <div>
                      <div className="text-[9px] font-bold tracking-wider text-[var(--success)] uppercase">Air customs verification</div>
                      <div className="mt-1 text-sm font-bold text-[var(--navy)]">LEO &amp; Gate-Out Validated</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      ["Master AWB Reference", "AWB-99042-DEL"],
                      ["Cargo Type", "High-Value Industrial Electronics"],
                      ["Air Cargo Complex (ACC) Clearance Gate", "IGIA Delhi T2 Cargo Terminal"],
                      ["Custom Assessment Milestone", "LET EXPORT ORDER (LEO) APPROVED / GATE-OUT VALIDATED"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white p-3">
                        <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</div>
                        <div className="mt-1 break-words text-xs leading-5 font-bold text-[var(--ink)]">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-full bg-[var(--success)] px-3 py-2 text-center text-[10px] font-black tracking-wider text-white">
                    CUSTOMS COMPLIANCE VERIFIED
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      {module === "Ports & Offshore" && (
        <section className="mb-6 overflow-hidden rounded-2xl bg-[var(--navy)] text-white shadow-[var(--card-shadow-hover)]">
          <div className="px-5 py-5">
            <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">National port intelligence</div>
            <h2 className="mt-1 text-lg font-bold">All-India Port Directory &amp; Telemetry Hub</h2>
            <p className="mt-1 text-[11px] leading-5 text-white/45">Verified facility profiles and live PCS terminal operations</p>
          </div>

          <div className="space-y-4 bg-[var(--canvas)] p-3">
            <div className="relative">
              <label className="sr-only" htmlFor="all-india-port-search">Search all Indian ports</label>
              <span className="pointer-events-none absolute top-3.5 left-4 z-[1] text-[var(--navy)]">
                <Icon name="search" size={19} />
              </span>
              <input
                id="all-india-port-search"
                value={portDirectoryQuery}
                onChange={(event) => setPortDirectoryQuery(event.target.value)}
                placeholder="Search All Indian Ports (JNPT, Mundra, Kandla...)"
                className="h-12 w-full rounded-xl border border-[var(--line)] bg-white pr-4 pl-12 text-xs font-bold tracking-tight text-[var(--navy)] outline-none placeholder:font-semibold placeholder:text-[var(--muted)] focus:border-[var(--info)] focus:shadow-[0_0_0_3px_var(--info-soft)]"
              />

              {portDirectoryQuery.trim() && (
                <div className="mt-2 overflow-hidden rounded-xl bg-white shadow-[var(--card-shadow-hover)]">
                  {[
                    "JNPT",
                    "Mundra",
                    "Chennai",
                    "Kandla",
                    "Cochin",
                    "Vizag",
                    "Paradip",
                    "Kolkata",
                    "Ennore",
                    "Tuticorin",
                    "Mormugao",
                    "New Mangalore",
                    "Pipavav",
                    "Hazira",
                  ]
                    .filter((port) => port.toLowerCase().includes(portDirectoryQuery.toLowerCase()))
                    .slice(0, 5)
                    .map((port) => (
                      <button
                        type="button"
                        key={port}
                        onClick={() => {
                          setPortDirectoryQuery(port);
                          notify(`${port} port profile selected`);
                        }}
                        className="flex w-full items-center justify-between border-b border-[var(--line)] px-4 py-3 text-left text-xs font-bold text-[var(--navy)] last:border-b-0"
                      >
                        {port}
                        <Icon name="chevron" size={14} />
                      </button>
                    ))}
                  {![
                    "JNPT",
                    "Mundra",
                    "Chennai",
                    "Kandla",
                    "Cochin",
                    "Vizag",
                    "Paradip",
                    "Kolkata",
                    "Ennore",
                    "Tuticorin",
                    "Mormugao",
                    "New Mangalore",
                    "Pipavav",
                    "Hazira",
                  ].some((port) => port.toLowerCase().includes(portDirectoryQuery.toLowerCase())) && (
                    <div className="px-4 py-3 text-xs text-[var(--muted)]">No matching port found.</div>
                  )}
                </div>
              )}
            </div>

            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setVerifiedPortOpen((open) => !open)}
                className="flex w-full items-center gap-3 rounded-2xl border border-[var(--info)]/20 p-4 text-left transition hover:bg-[var(--info-soft)]"
                aria-expanded={verifiedPortOpen}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--info-soft)] text-[var(--info)] shadow-[0_0_16px_var(--info-glow)]">
                  <Icon name="anchor" size={23} />
                </span>
                <span className="min-w-0 flex-1 break-words text-xs font-black leading-5 text-[var(--navy)]">[⚓ Click to View Verified Port Information]</span>
              </button>

              {verifiedPortOpen && (
                <div className="border-t border-[var(--line)] bg-[var(--aqua-soft)] p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--aqua)]"><Icon name="anchor" size={21} /></span>
                    <div>
                      <div className="text-[9px] font-bold tracking-wider text-[var(--teal)] uppercase">Facility profile verified</div>
                      <div className="mt-1 text-sm font-bold text-[var(--navy)]">Deendayal Port Authority</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      ["Port Operator", "Deendayal Port Authority (Kandla)"],
                      ["Port LOCODE", "INIXY"],
                      ["Infrastructure", "16 Dry Cargo Berths, 6 Oil Jetties"],
                      ["Strategic Connectivity", "Directly linked to Western Dedicated Freight Corridor (DFC)"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white p-3">
                        <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</div>
                        <div className="mt-1 break-words text-xs leading-5 font-bold text-[var(--ink)]">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setTerminalMetricsOpen((open) => !open)}
                className="flex w-full items-center gap-3 rounded-2xl border border-[var(--success)]/25 p-4 text-left transition hover:bg-[var(--success-soft)]"
                aria-expanded={terminalMetricsOpen}
              >
                <span className="corridor-radar grid size-11 shrink-0 place-items-center rounded-full bg-[var(--success)] text-white shadow-[0_0_18px_var(--success-glow)]">
                  <Icon name="globe" size={22} />
                </span>
                <span className="min-w-0 flex-1 break-words text-xs font-black leading-5 text-[var(--navy)]">[🌐 Click to Fetch Live Terminal Metrics]</span>
              </button>

              {terminalMetricsOpen && (
                <div className="border-t border-[var(--line)] bg-[var(--navy)] p-4 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="corridor-radar grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--info)] text-white"><Icon name="globe" size={21} /></span>
                    <div>
                      <div className="text-[9px] font-bold tracking-wider text-[var(--aqua)] uppercase">Live terminal status</div>
                      <div className="mt-1 text-sm font-bold">PCS / ULIP Connected</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      ["Current Berth Occupancy", "88%"],
                      ["Traffic Congestion Index", "Low (1.5h turnaround latency)"],
                      ["Integrated Systems Sync", "Live connection established with Port Community System (PCS) via ULIP gateway"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white/7 p-3">
                        <div className="text-[9px] font-bold tracking-wider text-white/35 uppercase">{label}</div>
                        <div className="mt-1 break-words text-xs leading-5 font-semibold text-white">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-full bg-[var(--success)] px-3 py-2 text-center text-[10px] font-black tracking-wider text-white">
                    LIVE TERMINAL FEED ACTIVE
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      {module === "Rail & Road" && (
        <article className="mb-6 overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
          <div className="featured-handoff-header flex flex-col gap-4 border-b border-[var(--line)] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-[0.14em] text-[var(--teal)] uppercase">Featured container handoff</div>
              <h2 className="featured-handoff-route mt-1 font-bold">Mundra Port Siding → ICD Dashrath Vadodara</h2>
              <p className="mt-1 text-xs text-[var(--muted)]">Indian Railways freight movement · Western Railway zone</p>
            </div>
            <span className="self-start rounded-full bg-[var(--success-soft)] px-3 py-1.5 text-[10px] font-bold text-[var(--success)]">ON SCHEDULE</span>
          </div>

          <div className="featured-handoff-stats grid border-b border-[var(--line)] md:grid-cols-4">
            {[
              ["FOIS rake number", "RKE-WR-240916-MUN-04"],
              ["Wagon allocation ID", "WAID-WR-CONT-88421"],
              ["Rake composition", "42 BLC wagons"],
              ["Train load", "42 containers · 3,180 t"],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-[var(--line)] p-4 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0">
                <div className="text-[10px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</div>
                <div className="mt-2 text-sm font-bold">{value}</div>
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="font-bold">FOIS route timeline</h3>
                <p className="mt-1 text-xs text-[var(--muted)]">Container handoff from port siding to inland container depot</p>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-[var(--muted-light)] uppercase">Planned distance</div>
                <div className="mt-1 text-sm font-bold">Approximately 465 km</div>
              </div>
            </div>

            <div className="fois-timeline relative grid gap-0 lg:grid-cols-5">
              <div className="absolute top-4 right-[10%] left-[10%] hidden h-0.5 bg-[var(--line)] lg:block" />
              {[
                ["Mundra Port Siding", "MDPR", "Handoff accepted", "16 Sep · 17:35", true],
                ["Gandhidham BG", "GIMB", "Rake formation", "16 Sep · 20:10", true],
                ["Samakhiali Jn", "SIOB", "Passed checkpoint", "16 Sep · 23:48", true],
                ["Ahmedabad Jn", "ADI", "Crew interchange", "17 Sep · 02:20", false],
                ["ICD Dashrath", "DRT", "Terminal arrival", "17 Sep · 04:40", false],
              ].map(([station, code, event, time, complete], index) => (
                <div key={station as string} className="fois-stop relative flex gap-4 border-l-2 border-[var(--line)] pb-6 pl-5 last:pb-0 lg:block lg:border-0 lg:p-0 lg:text-center">
                  <span className={`fois-stop-marker relative z-10 mt-1 grid size-8 shrink-0 place-items-center rounded-full border-4 border-white text-[10px] font-black shadow-sm lg:mx-auto lg:mt-0 ${complete ? "bg-[var(--teal)] text-white" : index === 3 ? "bg-[var(--warning)] text-white" : "bg-[var(--line)] text-[var(--muted)]"}`}>
                    {index + 1}
                  </span>
                  <div className="fois-stop-content lg:mt-3">
                    <div className="text-sm font-bold">{station}</div>
                    <div className="mt-1 text-[10px] font-bold text-[var(--teal)]">{code}</div>
                    <div className="mt-2 text-xs text-[var(--muted)]">{event}</div>
                    <div className="mt-1 text-[10px] font-semibold text-[var(--muted-light)]">{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="handoff-summary grid gap-4 bg-[var(--canvas)] p-5 sm:grid-cols-3">
            <div><span className="text-[10px] font-bold text-[var(--muted-light)] uppercase">Port-to-rail handoff</span><b className="mt-1 block text-sm">EIR verified · Seal intact</b></div>
            <div><span className="text-[10px] font-bold text-[var(--muted-light)] uppercase">Loco / operator</span><b className="mt-1 block text-sm">WAG-9 · Indian Railways</b></div>
            <div><span className="text-[10px] font-bold text-[var(--muted-light)] uppercase">ICD road connection</span><b className="mt-1 block text-sm">Gate slot 06:15 · 8 trucks</b></div>
          </div>
        </article>
      )}

      {module === "Rail & Road" && (
        <section className="mb-6 overflow-hidden rounded-2xl bg-[var(--navy)] text-white shadow-[var(--card-shadow-hover)]">
          <div className="px-5 py-5">
            <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Active last-mile dispatch control</div>
            <h2 className="mt-1 text-lg font-bold">Road Dispatch Telematics &amp; Carrier Fleet Log</h2>
            <p className="mt-1 text-[11px] leading-5 text-white/45">Vehicle availability, Vahan compliance, assigned carrier and loading readiness</p>
          </div>

          <div className="space-y-4 bg-[var(--canvas)] p-3">
            <div className="rounded-2xl bg-white p-3 shadow-[var(--card-shadow)]">
              <div className="relative">
                <span className="pointer-events-none absolute top-3.5 left-4 text-[var(--navy)]"><Icon name="search" size={18} /></span>
                <input
                  value={roadFleetSearch}
                  onChange={(event) => setRoadFleetSearch(event.target.value)}
                  placeholder="Search vehicle, driver or dispatch ID"
                  className="h-11 w-full rounded-xl border border-[var(--line)] bg-[var(--canvas)] pr-3 pl-11 text-xs font-semibold text-[var(--navy)] outline-none placeholder:text-[var(--muted-light)] focus:border-[var(--info)]"
                />
              </div>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setRoadFleetSegment("vehicle");
                    setFleetVehicleOpen(true);
                  }}
                  className={`w-full rounded-full border px-3 py-2.5 text-[10px] font-black ${
                    roadFleetSegment === "vehicle"
                      ? "border-[var(--info)] bg-[var(--info-soft)] text-[var(--info)]"
                      : "border-[var(--navy)] text-[var(--navy)]"
                  }`}
                >
                  Available Fleet Vehicles
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRoadFleetSegment("driver");
                    setDriverTelematicsOpen(true);
                  }}
                  className={`w-full rounded-full border px-3 py-2.5 text-[10px] font-black ${
                    roadFleetSegment === "driver"
                      ? "border-[var(--success)] bg-[var(--success-soft)] text-[var(--success)]"
                      : "border-[var(--navy)] text-[var(--navy)]"
                  }`}
                >
                  Assigned Driver Telematics
                </button>
              </div>
              {roadFleetSearch.trim() && (
                <div className="mt-3 rounded-xl bg-[var(--aqua-soft)] px-3 py-2.5 text-[10px] font-semibold text-[var(--teal)]">
                  Matching dispatch data for “{roadFleetSearch}”
                </div>
              )}
            </div>

            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setFleetVehicleOpen((open) => !open)}
                className="flex w-full items-center gap-3 rounded-2xl border border-[var(--info)]/25 p-4 text-left transition hover:bg-[var(--info-soft)]"
                aria-expanded={fleetVehicleOpen}
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--info)] text-white shadow-[0_0_18px_var(--info-glow)]">
                  <Icon name="truck" size={26} />
                </span>
                <span className="min-w-0 flex-1 break-words text-xs font-black leading-5 text-[var(--navy)]">[🚛 Click to View Fleet Vehicle Dispatch &amp; RC Book]</span>
              </button>

              {fleetVehicleOpen && (
                <div className="border-t border-[var(--line)] bg-[var(--navy)] p-4 text-white">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--info)] text-white"><Icon name="truck" size={24} /></span>
                    <div>
                      <div className="text-[9px] font-bold tracking-wider text-[var(--aqua)] uppercase">Commercial fleet verification</div>
                      <div className="mt-1 text-sm font-bold">GJ-06-ZZ-1234</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      ["Vehicle Reg No", "GJ-06-ZZ-1234"],
                      ["Status", "ACTIVE & COMPLIANT"],
                      ["RC Data Sync", "Verified via Vahan Gateway Corridor"],
                      ["Fleet State", "UNLOADED & AVAILABLE FOR IMMEDIATELY LAST-MILE DISPATCH"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white/7 p-3">
                        <div className="text-[9px] font-bold tracking-wider text-white/35 uppercase">{label}</div>
                        <div className="mt-1 break-words text-xs leading-5 font-semibold text-white">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-full bg-[var(--info)] px-3 py-2 text-center text-[10px] font-black tracking-wider text-white shadow-[0_0_16px_var(--info-glow)]">
                    RC &amp; PERMIT VERIFIED
                  </div>
                </div>
              )}
            </article>

            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <button
                type="button"
                onClick={() => setDriverTelematicsOpen((open) => !open)}
                className="flex w-full items-center gap-3 rounded-2xl border border-[var(--success)]/25 p-4 text-left transition hover:bg-[var(--success-soft)]"
                aria-expanded={driverTelematicsOpen}
              >
                <span className="corridor-radar grid size-12 shrink-0 place-items-center rounded-full bg-[var(--success)] text-white shadow-[0_0_18px_var(--success-glow)]">
                  <Icon name="driver" size={25} />
                </span>
                <span className="min-w-0 flex-1 break-words text-xs font-black leading-5 text-[var(--navy)]">[🧑‍✈️ Click to View Assigned Driver &amp; Contact Telematics]</span>
              </button>

              {driverTelematicsOpen && (
                <div className="border-t border-[var(--line)] bg-[var(--aqua-soft)] p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--success)] text-white shadow-[0_0_16px_var(--success-glow)]"><Icon name="driver" size={24} /></span>
                    <div>
                      <div className="text-[9px] font-bold tracking-wider text-[var(--success)] uppercase">Driver operations profile</div>
                      <div className="mt-1 text-sm font-bold text-[var(--navy)]">Kamalpreet Singh</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      ["Assigned Carrier Master", "Kamalpreet Singh"],
                      ["Mobile Contact Link", "+91 98765 43210 (Direct Driver Voice-Call Enabled)"],
                      ["Transport Routing Status", "Fleets sitting empty inside ICD Dashrath Vadodara Holding Yard Yard — Ready for immediate container loading"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white p-3">
                        <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</div>
                        <div className="mt-1 break-words text-xs leading-5 font-bold text-[var(--ink)]">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-full bg-[var(--success)] px-3 py-2 text-center text-[10px] font-black tracking-wider text-white shadow-[0_0_16px_var(--success-glow)]">
                    DRIVER &amp; FASTag ACTIVE
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      <article className={`rounded-2xl bg-white shadow-[var(--card-shadow)] ${
        module === "Vessels" ? "overflow-visible" : "overflow-hidden"
      }`}>
        <div className="flex items-center justify-between border-b border-[var(--line)] p-5">
          <div>
            <h2 className="font-bold">Operational records</h2>
            {module !== "Air Cargo" && (
              <p className="mt-1 text-xs text-[var(--muted)]">Consolidated records from connected operational sources</p>
            )}
          </div>
          <button type="button" onClick={() => onAction(`${module} filters opened`)} className="grid size-9 place-items-center rounded-lg border border-[var(--line)] text-[var(--muted)]"><Icon name="filter" size={17} /></button>
        </div>

        {module === "Air Cargo" && (
          <section className="bg-[var(--canvas)] p-3">
            <div className="overflow-hidden rounded-2xl bg-[var(--navy)] shadow-[var(--card-shadow-hover)]">
              <div className="px-5 py-4 text-white">
                <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Airport cargo event stream</div>
                <h3 className="mt-1 text-lg font-bold">Active Air Cargo Ingestion</h3>
                <p className="mt-1 text-[11px] leading-5 text-white/45">Live AWB, ULD, flight and customs-terminal milestones</p>
              </div>

              <div className="space-y-3 bg-[var(--canvas)] p-3">
                <button
                  type="button"
                  onClick={() => onAction("AI-99042-DEL live air cargo stream opened")}
                  className="w-full overflow-hidden rounded-2xl bg-white p-4 text-left shadow-[var(--card-shadow)] transition active:scale-[0.99]"
                >
                  <span className="flex items-start gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--info)] text-white shadow-[0_0_18px_var(--info-glow)]"><Icon name="plane" size={23} /></span>
                    <span className="min-w-0">
                      <span className="block break-words text-sm font-black tracking-tight text-[var(--navy)]">AWB: AI-99042-DEL</span>
                      <span className="mt-1 block break-words text-[10px] leading-4 text-[var(--muted)]">Flight: AI-101 | ULD: AKH-8821 | Volume: 4.2 Tonnes | Cargo: High-Value Electronics</span>
                    </span>
                  </span>

                  <span className="mt-5 block">
                    <span className="relative block h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
                      <span className="absolute inset-y-0 left-0 w-[68%] rounded-full bg-[var(--info)] shadow-[0_0_12px_var(--info-glow)]" />
                    </span>
                    <span className="mt-4 block space-y-3">
                      <span className="flex items-start gap-3">
                        <span className="mt-1 size-2.5 shrink-0 rounded-full bg-[var(--info)]" />
                        <span className="min-w-0">
                          <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Origin</span>
                          <span className="mt-0.5 block text-xs font-semibold text-[var(--ink)]">JFK Intl</span>
                        </span>
                      </span>
                      <span className="flex items-start gap-3">
                        <span className="corridor-radar mt-0.5 size-3 shrink-0 rounded-full bg-[var(--info)]" />
                        <span className="min-w-0">
                          <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Current Status</span>
                          <span className="mt-0.5 block break-words text-xs font-semibold text-[var(--ink)]">In Flight (ETA IGIA Delhi: 04:30 AM)</span>
                        </span>
                      </span>
                    </span>
                  </span>

                  <span className="mt-5 inline-flex rounded-full bg-[var(--info)] px-3 py-1.5 text-[10px] font-black tracking-wider text-white shadow-[0_0_18px_var(--info-glow)]">IN FLIGHT</span>
                </button>

                <button
                  type="button"
                  onClick={() => onAction("EK-44109-BOM customs intake stream opened")}
                  className="w-full overflow-hidden rounded-2xl bg-white p-4 text-left shadow-[var(--card-shadow)] transition active:scale-[0.99]"
                >
                  <span className="flex items-start gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[var(--success)] text-white shadow-[0_0_16px_var(--success-glow)]"><Icon name="plane" size={23} /></span>
                    <span className="min-w-0">
                      <span className="block break-words text-sm font-black tracking-tight text-[var(--navy)]">AWB: EK-44109-BOM</span>
                      <span className="mt-1 block break-words text-[10px] leading-4 text-[var(--muted)]">Flight: EK-504 | ULD: AAP-9932 | Volume: 2.8 Tonnes | Cargo: Critical Pharmaceuticals</span>
                    </span>
                  </span>

                  <span className="mt-5 block">
                    <span className="relative block h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
                      <span className="absolute inset-y-0 left-0 w-[92%] rounded-full bg-[var(--success)]" />
                    </span>
                    <span className="mt-4 block space-y-3">
                      <span className="flex items-start gap-3">
                        <span className="mt-1 size-2.5 shrink-0 rounded-full bg-[var(--success)]" />
                        <span className="min-w-0">
                          <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Origin</span>
                          <span className="mt-0.5 block text-xs font-semibold text-[var(--ink)]">Dubai Cargo Hub</span>
                        </span>
                      </span>
                      <span className="flex items-start gap-3">
                        <span className="mt-1 size-2.5 shrink-0 rounded-full bg-[var(--success)]" />
                        <span className="min-w-0">
                          <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Current Status</span>
                          <span className="mt-0.5 block break-words text-xs font-semibold text-[var(--ink)]">Landed at Mumbai Air Cargo Complex Terminal</span>
                        </span>
                      </span>
                    </span>
                  </span>

                  <span className="mt-5 inline-flex rounded-full bg-[var(--success)] px-3 py-1.5 text-[10px] font-black tracking-wider text-white">AWAITING CUSTOMS</span>
                </button>
              </div>
            </div>
          </section>
        )}

        <div className="mobile-records space-y-3 p-3 md:hidden">
          {content.rows.map((row) => (
            <article key={row[0]} className="overflow-hidden rounded-2xl bg-[var(--canvas)]">
              {module === "Customs" ? (
                <>
                  <div className="p-4">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[9px] font-bold tracking-[0.12em] text-[var(--muted-light)] uppercase">Primary Reference Code</div>
                        <div className="mt-1 text-sm font-bold text-[var(--navy)]">{row[0]}</div>
                      </div>
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--teal)]"><Icon name="globe" size={17} /></span>
                    </div>
                    <div className="mb-4">
                      <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Commodity Type / IEC</div>
                      <div className="mt-1 text-sm font-semibold">{row[1]}</div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Port Code</div>
                        <div className="mt-1 text-sm font-bold">{row[2]}</div>
                      </div>
                      <div>
                        <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Assessment</div>
                        <div className="mt-1 text-sm font-semibold">{row[3]}</div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAction(`Customs status opened: ${row[4]}`)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-xs font-bold ${
                      row[4] === "Out of charge" || row[4] === "Let export order"
                        ? "bg-[var(--success)] text-white"
                        : row[4] === "Documents required"
                          ? "bg-[var(--danger)] text-white"
                          : "bg-[var(--warning)] text-white"
                    }`}
                  >
                    <span>
                      {row[4] === "Out of charge"
                        ? "Out of Charge"
                        : row[4] === "Under assessment"
                          ? "Under Assessment"
                          : row[4] === "Let export order"
                            ? "Let Export Order"
                            : row[4] === "Documents required"
                              ? "Documents Required"
                              : row[4]}
                    </span>
                    <Icon name="chevron" size={15} />
                  </button>
                </>
              ) : (
                <div className="p-4">
                  <div className="text-sm font-bold text-[var(--navy)]">{row[0]}</div>
                  <div className="mt-4 space-y-3">
                    {row.slice(1).map((cell, index) => (
                      <div key={`${row[0]}-${cell}`}>
                        <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{content.columns[index + 1]}</div>
                        <div className="mt-1 text-xs font-semibold text-[var(--ink)]">{cell}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}

          {module === "Customs" && (
            <>
              <section className="mt-2 overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
                <div className="bg-[var(--navy)] px-4 py-4 text-white">
                  <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Compliance stream</div>
                  <h3 className="mt-1 text-base font-bold">Regulatory Document Compliance &amp; Errors Log</h3>
                </div>

                <div className="space-y-2 p-4">
                  {["Bill of Entry", "Commercial Invoice"].map((document) => (
                    <div key={document} className="flex items-center gap-3 rounded-xl bg-[var(--canvas)] px-3 py-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--success)] text-sm font-black text-white">✓</span>
                      <span className="text-sm font-bold text-[var(--ink)]">{document}</span>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => onAction("Certificate of Origin upload window opened")}
                    className="flex w-full items-center justify-between rounded-xl bg-[var(--line)] px-3 py-3 text-left text-sm font-bold text-[var(--ink)]"
                  >
                    Upload Certificate of Origin
                    <Icon name="plus" size={16} />
                  </button>
                </div>

                <div className="bg-[var(--navy)] p-4 text-white">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold">Active error ticker</span>
                    <span className="rounded-full bg-[var(--danger)] px-2 py-1 text-[9px] font-black">2 ACTIVE</span>
                  </div>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => onAction("ICE-9902 discrepancy record opened")}
                      className="w-full rounded-xl bg-white/7 p-3 text-left text-[11px] leading-5 text-white/75"
                    >
                      ⚠️ <b className="text-[#f6c66f]">ICE-9902</b> | Doc: Bill of Lading | Reason: Gross Weight Discrepancy with PCS manifest data
                    </button>
                    <button
                      type="button"
                      onClick={() => onAction("ICE-4410 discrepancy record opened")}
                      className="w-full rounded-xl bg-white/7 p-3 text-left text-[11px] leading-5 text-white/75"
                    >
                      ⚠️ <b className="text-[#f6c66f]">ICE-4410</b> | Doc: HSN Classification | Reason: Invalid 8-digit tariff code detected
                    </button>
                  </div>
                </div>
              </section>

              <div className="grid gap-3 pt-2 pb-1">
                <button
                  type="button"
                  onClick={() => onAction("Terminal map opened")}
                  className="w-full rounded-2xl bg-[var(--navy)] p-5 text-left text-white"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-[var(--aqua)]"><Icon name="route" size={20} /></span>
                  <span className="mt-5 block text-base font-bold">View Terminal Map</span>
                  <span className="mt-1 block text-xs leading-5 text-white/45">Port gates, customs zones and container handoff positions</span>
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById("regulatory-errors")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="w-full rounded-2xl bg-[var(--danger)] p-5 text-left text-white"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-lg">⚠️</span>
                  <span className="mt-5 block text-base font-bold">Regulatory Errors</span>
                  <span className="mt-1 block text-xs leading-5 text-white/65">2 discrepancies require immediate documentation review</span>
                </button>
              </div>
            </>
          )}
        </div>

        {module === "Vessels" ? (
          <div className="desktop-ledger hidden overflow-x-auto overflow-y-visible pb-4 md:block">
            <table className="w-full min-w-[1280px] table-fixed border-collapse">
              <colgroup>
                <col className="w-[28%]" />
                <col className="w-[18%]" />
                <col className="w-[20%]" />
                <col className="w-[8%]" />
                <col className="w-[11%]" />
                <col className="w-[15%]" />
              </colgroup>
              <thead>
                <tr className="bg-[var(--navy)] text-left text-[10px] font-bold tracking-[0.12em] text-white/60 uppercase">
                  <th className="px-6 py-4 whitespace-nowrap">Vessel / IMO</th>
                  <th className="px-6 py-4 whitespace-nowrap">Flag &amp; Type</th>
                  <th className="px-6 py-4 whitespace-nowrap">Last Position</th>
                  <th className="px-6 py-4 whitespace-nowrap">Speed</th>
                  <th className="px-6 py-4 whitespace-nowrap">Voyage Status</th>
                  <th className="px-6 py-4 whitespace-nowrap">Vessel Tracking</th>
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row) => (
                  <tr key={row[0]} className="h-20 border-b border-[var(--line)] bg-white align-middle transition last:border-b-0 hover:bg-[var(--canvas)]">
                    <td className="px-6 py-4 text-sm font-bold whitespace-nowrap text-[var(--navy)]">{row[0]}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-[var(--muted)]">{row[1]}</td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-[var(--ink)]">{row[2]}</td>
                    <td className="px-6 py-4 text-sm font-bold whitespace-nowrap text-[var(--ink)]">{row[3]}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold whitespace-nowrap ${
                        row[4] === "Underway"
                          ? "bg-[var(--success-soft)] text-[var(--success)]"
                          : "bg-[var(--warning-soft)] text-[var(--warning)]"
                      }`}>{row[4]}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => onAction(`Live map tracking opened for ${row[0]}`)}
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-3 py-2 text-[10px] font-bold whitespace-nowrap text-white shadow-md shadow-[var(--navy-shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--ink)]"
                      >
                        <Icon name="route" size={13} />
                        [Map Tracking Live]
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={`desktop-ledger ${module === "Customs" ? "hidden overflow-hidden pb-4 md:block" : "hidden overflow-x-auto pb-1 md:block"}`}>
            <table className={`w-full ${
              module === "Ports & Offshore"
                ? "min-w-[1080px] table-fixed"
                : module === "Customs"
                  ? "table-fixed border-collapse"
                  : "min-w-[840px]"
            }`}>
              {module === "Ports & Offshore" && (
                <colgroup>
                  <col className="w-[21%]" />
                  <col className="w-[9%]" />
                  <col className="w-[15%]" />
                  <col className="w-[16%]" />
                  <col className="w-[13%]" />
                  <col className="w-[26%]" />
                </colgroup>
              )}
              {module === "Customs" && (
                <colgroup>
                  <col className="w-[23%]" />
                  <col className="w-[28%]" />
                  <col className="w-[10%]" />
                  <col className="w-[18%]" />
                  <col className="w-[21%]" />
                </colgroup>
              )}
              <thead><tr className="bg-[var(--canvas)] text-left text-[10px] font-bold tracking-[0.12em] text-[var(--muted-light)] uppercase">
                {content.columns.map((column, index) => (
                  <th
                    key={column}
                    className={
                      module === "Ports & Offshore"
                        ? "px-4 py-4 tracking-[0.06em] whitespace-nowrap"
                        : module === "Customs"
                          ? `${index < 2 || index === 4 ? "px-5" : "px-4"} py-4 whitespace-nowrap`
                          : "px-5 py-4"
                    }
                  >
                    {column}
                  </th>
                ))}
              </tr></thead>
              <tbody>
                {content.rows.map((row) => (
                  <tr key={row[0]} className={`border-t border-[var(--line)] bg-white align-middle transition hover:bg-[var(--canvas)] ${
                    module === "Customs" ? "h-20 last:border-b-0" : ""
                  }`}>
                    {row.map((cell, index) => (
                      <td key={cell} className={`${
                        module === "Ports & Offshore"
                          ? "px-4 py-5 text-xs whitespace-nowrap"
                          : module === "Customs"
                            ? `${index < 2 || index === 4 ? "px-5" : "px-4"} py-5 text-sm whitespace-nowrap`
                            : "px-5 py-5 text-sm"
                      } leading-5 ${
                        index === 0
                          ? "font-bold text-[var(--navy)]"
                          : index === row.length - 1 && module === "Ports & Offshore"
                            ? "font-bold text-[var(--teal)]"
                            : "text-[var(--muted)]"
                      }`}>
                        {index === row.length - 1 && module === "Ports & Offshore" ? (
                          <button
                            type="button"
                            onClick={() => onAction(`${row[0]} terminal map and telemetry opened`)}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-4 py-2.5 text-[10px] font-bold whitespace-nowrap text-white shadow-md shadow-[var(--navy-shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--ink)]"
                          >
                            <Icon name="route" size={13} />
                            {cell}
                          </button>
                        ) : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </article>

      {module === "Customs" && (
        <section className="desktop-compliance mt-6 hidden overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow-hover)] md:block">
          <div className="bg-[var(--navy)] px-6 py-5 text-white">
            <div className="text-[10px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Customs governance workspace</div>
            <h2 className="mt-1 text-lg font-bold">Regulatory Document Compliance &amp; Audit Log</h2>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="p-6 lg:p-7">
              <div className="mb-5">
                <h3 className="font-bold text-[var(--navy)]">Mandatory Document Filings</h3>
                <p className="mt-1 text-xs text-[var(--muted)]">Required documents linked to the active customs record</p>
              </div>

              <div className="space-y-3">
                {["Bill of Entry (BOE)", "Commercial Invoice", "Packing List"].map((document) => (
                  <div key={document} className="flex items-center gap-3 rounded-xl bg-[var(--canvas)] px-4 py-3.5">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--success)] text-sm font-black text-white" aria-label="Filed and verified">
                      ✓
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-[var(--ink)]">{document}</div>
                      <div className="mt-0.5 text-[10px] font-semibold text-[var(--success)]">Filed · Verification complete</div>
                    </div>
                    <span className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Compliant</span>
                  </div>
                ))}

                <div className="flex flex-col gap-3 rounded-xl bg-[var(--canvas)] px-4 py-3.5 sm:flex-row sm:items-center">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--line)] text-sm font-black text-[var(--muted)]" aria-label="Pending">
                    –
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-[var(--ink)]">Certificate of Origin (Pending)</div>
                    <div className="mt-0.5 text-[10px] font-semibold text-[var(--warning)]">Required before final customs release</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAction("Certificate of Origin upload window opened")}
                    className="rounded-lg bg-[var(--line)] px-4 py-2 text-xs font-bold whitespace-nowrap text-[var(--ink)] transition hover:bg-[var(--muted-light)] hover:text-white"
                  >
                    Upload document
                  </button>
                </div>
              </div>
            </div>

            <div id="regulatory-errors" className="scroll-mt-20 bg-[var(--navy)] p-6 text-white lg:p-7">
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-lg bg-[var(--warning)]/15 text-base" aria-hidden="true">⚠️</span>
                  <h3 className="font-bold">Live Customs Discrepancy &amp; Gate-In Errors</h3>
                </div>
                <p className="mt-2 text-xs text-white/45">Exceptions requiring customs or documentation-team review</p>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => onAction("ICE-9902 discrepancy record opened")}
                  className="w-full rounded-xl bg-white/7 p-4 text-left transition hover:bg-white/10"
                >
                  <span className="block text-xs leading-5 text-white/75">
                    ⚠️ <b className="text-[#f6c66f]">Error Code: ICE-9902</b> <span className="text-white/25">|</span> Doc: <b className="text-white">Bill of Lading</b> <span className="text-white/25">|</span> Reason: Gross Weight Discrepancy (Mismatch with PCS manifest payload)
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onAction("ICE-4410 discrepancy record opened")}
                  className="w-full rounded-xl bg-white/7 p-4 text-left transition hover:bg-white/10"
                >
                  <span className="block text-xs leading-5 text-white/75">
                    ⚠️ <b className="text-[#f6c66f]">Error Code: ICE-4410</b> <span className="text-white/25">|</span> Doc: <b className="text-white">HSN Classification</b> <span className="text-white/25">|</span> Reason: Invalid 8-digit tariff code detected on Row 14
                  </span>
                </button>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-black/15 px-4 py-3 text-[10px] text-white/45">
                <span>2 unresolved exceptions</span>
                <span>Last ICEGATE sync · 14:32 IST</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

function DetailSection({ title, items }: { title: string; items: string[][] }) {
  return (
    <section className="mb-4 rounded-2xl border border-[var(--line)] p-5">
      <h3 className="mb-4 font-bold">{title}</h3>
      <dl className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        {items.map(([label, value]) => (
          <div key={label}>
            <dt className="text-[10px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</dt>
            <dd className="mt-1 text-sm font-semibold text-[var(--ink)]">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function SettingsWorkspace({
  darkMode,
  language,
  onDarkModeChange,
  onLanguageChange,
  onAction,
}: {
  darkMode: boolean;
  language: string;
  onDarkModeChange: (enabled: boolean) => void;
  onLanguageChange: (language: string) => void;
  onAction: (message: string) => void;
}) {
  const [signOutConfirmation, setSignOutConfirmation] = useState(false);
  const languages = [
    ["English", "English"],
    ["Hindi", "हिन्दी"],
    ["French", "Français"],
    ["Japanese", "日本語"],
    ["German", "Deutsch"],
    ["Spanish", "Español"],
  ];

  return (
    <section>
      <div className="module-heading mb-6">
        <div className="mb-2 text-xs font-bold tracking-[0.14em] text-[var(--teal)] uppercase">Account preferences</div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Manage language, display appearance, and account access.</p>
      </div>

      <div className="space-y-4">
        <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
          <div className="flex items-center gap-3 border-b border-[var(--line)] p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--teal)]">
              <Icon name="globe" size={20} />
            </span>
            <div>
              <h2 className="text-sm font-bold text-[var(--ink)]">Language</h2>
              <p className="mt-0.5 text-[11px] text-[var(--muted)]">Choose your preferred interface language</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 p-3">
            {languages.map(([name, nativeName]) => {
              const selected = language === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => {
                    onLanguageChange(name);
                    onAction(`${name} language selected`);
                  }}
                  aria-pressed={selected}
                  className={`min-w-0 rounded-xl border p-3 text-left transition ${
                    selected
                      ? "border-[var(--primary)] bg-[var(--info-soft)] text-[var(--primary)]"
                      : "border-[var(--line)] bg-[var(--canvas)] text-[var(--ink)]"
                  }`}
                >
                  <span className="block text-xs font-bold">{name}</span>
                  <span className="mt-1 block truncate text-[10px] text-[var(--muted)]">{nativeName}</span>
                </button>
              );
            })}
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
          <div className="flex items-center gap-3 border-b border-[var(--line)] p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--teal)]">
              <Icon name="theme" size={20} />
            </span>
            <div>
              <h2 className="text-sm font-bold text-[var(--ink)]">Display brightness</h2>
              <p className="mt-0.5 text-[11px] text-[var(--muted)]">Switch between light and dark display modes</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 p-3">
            {[
              { label: "Light mode", value: false, detail: "Bright display" },
              { label: "Dark mode", value: true, detail: "Reduced glare" },
            ].map((option) => {
              const selected = darkMode === option.value;
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => onDarkModeChange(option.value)}
                  aria-pressed={selected}
                  className={`rounded-xl border p-3 text-left transition ${
                    selected
                      ? "border-[var(--primary)] bg-[var(--info-soft)]"
                      : "border-[var(--line)] bg-[var(--canvas)]"
                  }`}
                >
                  <span className={`mb-3 block h-12 rounded-lg border ${
                    option.value
                      ? "border-white/10 bg-[var(--navy)]"
                      : "border-[var(--line)] bg-white"
                  }`} />
                  <span className="block text-xs font-bold text-[var(--ink)]">{option.label}</span>
                  <span className="mt-1 block text-[10px] text-[var(--muted)]">{option.detail}</span>
                </button>
              );
            })}
          </div>
        </article>

        <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
          <div className="flex items-center gap-3 p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--danger-soft)] text-[var(--danger)]">
              <Icon name="chevron" size={20} />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-bold text-[var(--ink)]">Sign out</h2>
              <p className="mt-0.5 text-[11px] text-[var(--muted)]">End the current OM Maritime Grid session</p>
            </div>
          </div>

          {signOutConfirmation ? (
            <div className="border-t border-[var(--line)] bg-[var(--danger-soft)] p-4">
              <p className="text-xs leading-5 font-semibold text-[var(--ink)]">Are you sure you want to sign out?</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSignOutConfirmation(false)}
                  className="rounded-xl border border-[var(--line)] bg-white px-3 py-3 text-xs font-bold text-[var(--ink)]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSignOutConfirmation(false);
                    onAction("Signed out securely");
                  }}
                  className="rounded-xl bg-[var(--danger)] px-3 py-3 text-xs font-bold text-white"
                >
                  Confirm sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="border-t border-[var(--line)] p-3">
              <button
                type="button"
                onClick={() => setSignOutConfirmation(true)}
                className="w-full rounded-xl bg-[var(--danger-soft)] px-4 py-3 text-xs font-bold text-[var(--danger)] transition hover:bg-[var(--danger)] hover:text-white"
              >
                Sign out of account
              </button>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

function MaritimeLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="maritime-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B2942" />
          <stop offset="100%" stopColor="#1769E0" />
        </linearGradient>
        <linearGradient id="maritime-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#maritime-logo-grad)" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="rgba(255,255,255,0.22)" />
      <circle cx="20" cy="9.5" r="2" fill="#38BDF8" />
      <path d="M14 8.5C15.5 7 17.5 6 20 6C22.5 6 24.5 7 26 8.5" stroke="#7EC8FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
      <path d="M11 6C13.2 4 16.3 3 20 3C23.7 3 26.8 4 29 6" stroke="#7EC8FF" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
      <path d="M7 25L11 18H29L33 25H7Z" fill="#FFFFFF" />
      <rect x="17.5" y="10" width="5" height="3.5" rx="0.5" fill="#FFFFFF" opacity="0.9" />
      <rect x="12" y="14" width="4.5" height="4" rx="0.5" fill="#00E5FF" />
      <rect x="17.5" y="14" width="5" height="4" rx="0.5" fill="#FF7A1A" />
      <rect x="23.5" y="14" width="4.5" height="4" rx="0.5" fill="#198754" />
      <path
        d="M5 28.5C10 26.5 14 30.5 19 28.5C24 26.5 28 30.5 35 28.5C36 28.2 37 28.6 37 29.5L34.5 34C28.5 35.5 24 32.5 19 34C14 35.5 10 32.5 5 34L3 29.5C3 28.6 4 28.2 5 28.5Z"
        fill="url(#maritime-wave-grad)"
      />
    </svg>
  );
}

function App() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [toast, setToast] = useState("");
  const [selectedShipment, setSelectedShipment] = useState<(typeof shipments)[number] | null>(null);
  const [showNewShipment, setShowNewShipment] = useState(false);
  const [trackerQuery, setTrackerQuery] = useState("");
  const [trackerResult, setTrackerResult] = useState(false);
  const [rawExportModule, setRawExportModule] = useState<string | null>(null);
  const [showTransitLog, setShowTransitLog] = useState(false);
  const [mapLayer, setMapLayer] = useState<"Vessels" | "Ports" | "Weather">("Vessels");
  const [scheduleMode, setScheduleMode] = useState<"active" | "delayed">("active");
  const [liveLocationMode, setLiveLocationMode] = useState<"train" | "truck" | null>(null);
  const [selectedPortInfo, setSelectedPortInfo] = useState<(typeof portInformation)[number] | null>(null);
  const [expandedMetric, setExpandedMetric] = useState<"ports" | "customs" | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  const filtered = useMemo(() => {
    const value = query.toLowerCase();
    return shipments.filter((shipment) =>
      `${shipment.id} ${shipment.vessel} ${shipment.from} ${shipment.to}`
        .toLowerCase()
        .includes(value),
    );
  }, [query]);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const activeRawPayload = activeContainerPayload;

  return (
    <div className={`mobile-device-shell min-h-screen bg-[var(--canvas)] text-[var(--ink)] ${darkMode ? "theme-dark" : ""}`}>
      <aside
        className={`desktop-sidebar fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[var(--navy)] text-white transition-transform duration-300 lg:translate-x-0 ${
          mobileMenu ? "mobile-drawer-open translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center gap-3 px-6">
          <MaritimeLogo size={36} />
          <div>
            <div className="text-lg font-bold tracking-tight text-white">Maritime Grid</div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-[var(--aqua)] uppercase">
              National Logistics View
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
          <div className="px-3 pb-3 text-[10px] font-bold tracking-[0.18em] text-white/35 uppercase">
            Command center
          </div>
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setActiveNav(item.label);
                setMobileMenu(false);
                if (item.label !== "Overview") notify(`${item.label} workspace selected`);
              }}
              className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                activeNav === item.label
                  ? "bg-[var(--aqua)] text-[var(--navy)] shadow-lg shadow-black/10"
                  : "text-white/65 hover:bg-white/8 hover:text-white"
              }`}
            >
              <Icon name={item.icon} size={19} />
              <span className="flex-1">{item.label}</span>
              {activeNav === item.label && <Icon name="chevron" size={15} />}
            </button>
          ))}
        </nav>

        <div className="m-3 rounded-2xl bg-white/5 p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-white/10 text-xs font-bold">OG</div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">OM GORE</div>
              <div className="text-[10px] leading-4 text-white/45">Founder &amp; Lead Systems Architect</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveNav("Settings");
              setMobileMenu(false);
            }}
            className="w-full rounded-lg border border-white/10 py-2 text-xs font-semibold text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            Manage account
          </button>
        </div>
      </aside>

      {mobileMenu && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileMenu(false)}
          className="mobile-backdrop fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <main className="mobile-main min-h-screen lg:ml-64">
        <header className="mobile-header sticky top-0 z-30 flex h-16 items-center justify-between bg-white/95 px-3 shadow-[0_1px_16px_rgba(16,40,52,0.04)] backdrop-blur-xl sm:h-20 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setMobileMenu(true)}
              className="mobile-menu-trigger grid size-10 place-items-center rounded-xl border border-[var(--line)] text-[var(--muted)] lg:hidden"
            >
              <Icon name="menu" />
            </button>
            <div className="mobile-brand flex items-center gap-2.5 lg:hidden">
              <MaritimeLogo size={30} />
              <div className="leading-tight">
                <span className="block text-xs font-bold text-[var(--navy)]">Maritime Grid</span>
                <span className="block text-[8px] font-semibold tracking-wider text-[var(--teal)] uppercase">Multimodal Hub</span>
              </div>
            </div>
            <div className="desktop-search relative hidden md:block">
              <Icon name="search" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search shipments, vessels, ports..."
                className="w-80 border-0 bg-transparent py-2 pr-2 pl-8 text-sm outline-none placeholder:text-[var(--muted-light)]"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => notify("You have 3 new operational alerts")}
              className="relative grid size-10 place-items-center rounded-xl border border-[var(--line)] bg-white text-[var(--muted)] transition hover:border-[var(--aqua)] hover:text-[var(--navy)]"
            >
              <Icon name="bell" size={19} />
            </button>
            <button
              type="button"
              onClick={() => setShowNewShipment(true)}
              className="ml-1 flex h-10 items-center gap-2 rounded-xl bg-[var(--navy)] px-4 text-sm font-semibold text-white shadow-lg shadow-[var(--navy-shadow)] transition hover:-translate-y-0.5"
            >
              <Icon name="plus" size={17} />
              <span className="new-shipment-label hidden sm:inline">New shipment</span>
            </button>
          </div>
        </header>

        <div className="app-content w-full max-w-none p-3 sm:p-8">
          {activeNav === "Overview" && (
            <section className="overview-banner mb-6 overflow-hidden rounded-2xl bg-[var(--navy)] text-white shadow-[var(--card-shadow-hover)]">
              <div className="overview-banner-grid grid gap-6 p-6 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:p-8">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-[var(--aqua)] uppercase">
                    <Icon name="globe" size={15} /> Indian Ocean visibility
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Indian Ocean Consignment Tracker</h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                    Secure, real-time multi-modal logistics tracking across ports, vessel networks, ICEGATE customs, and hinterland rail handoffs.
                  </p>
                </div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!trackerQuery.trim()) {
                      notify("Enter a consignment reference to begin tracking");
                      return;
                    }
                    setTrackerResult(true);
                    setShowTransitLog(true);
                  }}
                  className="rounded-2xl border border-white/10 bg-white/7 p-2"
                >
                  <label className="sr-only" htmlFor="indian-ocean-tracker">Indian Ocean consignment reference</label>
                  <div className="tracker-form-row flex flex-col gap-2 sm:flex-row">
                    <div className="relative flex-1">
                      <span className="absolute top-1/2 left-4 -translate-y-1/2 text-white/40"><Icon name="search" size={19} /></span>
                      <input
                        id="indian-ocean-tracker"
                        value={trackerQuery}
                        onChange={(event) => {
                          setTrackerQuery(event.target.value);
                          setTrackerResult(false);
                        }}
                        placeholder="Enter container, BL, AWB or OM reference"
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/10 pr-4 pl-12 text-sm font-medium text-white outline-none placeholder:text-white/35 focus:border-[var(--aqua)]"
                      />
                    </div>
                    <button type="submit" className="h-12 rounded-xl bg-[var(--success)] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5">
                      Track consignment
                    </button>
                  </div>
                </form>
              </div>
              {trackerResult && (
                <div className="tracker-result-grid grid gap-4 border-t border-white/10 bg-white/5 p-5 sm:grid-cols-[1.3fr_1fr_1fr_auto] sm:items-center">
                  <div>
                    <div className="text-[10px] font-bold tracking-wider text-white/35 uppercase">Matched reference</div>
                    <div className="mt-1 text-sm font-bold">{trackerQuery.toUpperCase()}</div>
                    <div className="mt-1 text-xs text-white/50">40' container · Industrial machinery</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-wider text-white/35 uppercase">Current position</div>
                    <div className="mt-1 text-sm font-bold">Arabian Sea · 14.082°N</div>
                    <div className="mt-1 text-xs text-[var(--aqua)]">Reporting normally</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-wider text-white/35 uppercase">Next handoff</div>
                    <div className="mt-1 text-sm font-bold">Mundra Port Siding</div>
                    <div className="mt-1 text-xs text-white/50">Rail allocation pending</div>
                  </div>
                  <button type="button" onClick={() => setSelectedShipment(shipments[0])} className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-xs font-bold hover:bg-white/10">
                    Open record <Icon name="chevron" size={14} />
                  </button>
                </div>
              )}
            </section>
          )}
          {activeNav === "Overview" ? (
            <>
          <section className="overview-heading mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <time dateTime="2026-10-05" className="mb-2 block text-xs font-bold tracking-[0.14em] text-[var(--teal)] uppercase">
                MONDAY, 5 OCTOBER 2026
              </time>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Gati Shakti Master Portal | Operations Control
              </h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Here is what is happening across your supply chain today.
              </p>
            </div>
            <button
              type="button"
              onClick={() => document.getElementById("analytics-overview")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="analytics-chip flex h-11 items-center justify-center gap-2.5 rounded-xl bg-[var(--navy)] px-5 text-sm font-semibold text-white shadow-lg shadow-[var(--navy-shadow)] transition hover:-translate-y-0.5 hover:bg-[var(--ink)]"
            >
              <Icon name="dashboard" size={18} />
              System Analytics Overview
            </button>
          </section>

          <section id="analytics-overview" className="overview-metrics scroll-mt-24 mb-6 grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {[
              { label: "Active Container Streams (Indian Ocean)", value: "248", trend: "+12 this week", icon: "box" as IconName },
              { label: "Pending Port Handoffs", value: "36", trend: "8 scheduled today", icon: "ship" as IconName },
              { label: "Customs pending", value: "14", trend: "3 require action", icon: "globe" as IconName },
              { label: "On-time delivery", value: "94.8%", trend: "+2.4% vs last month", icon: "clock" as IconName },
            ].map((item, index) => (
              <article
                key={item.label}
                className="group rounded-2xl bg-white p-5 shadow-[var(--card-shadow)] transition hover:-translate-y-0.5 hover:shadow-[var(--card-shadow-hover)]"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (index === 1) setExpandedMetric((current) => current === "ports" ? null : "ports");
                    else if (index === 2) setExpandedMetric((current) => current === "customs" ? null : "customs");
                    else if (index === 0) setActiveNav("Shipments");
                    else notify("On-time delivery analytics opened");
                  }}
                  className="w-full text-left"
                  aria-expanded={index === 1 ? expandedMetric === "ports" : index === 2 ? expandedMetric === "customs" : undefined}
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div
                      className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                        index === 2
                          ? "bg-[var(--warning-soft)] text-[var(--warning)]"
                          : "bg-[var(--aqua-soft)] text-[var(--teal)]"
                      }`}
                    >
                      <Icon name={item.icon} size={20} />
                    </div>
                    {(index === 1 || index === 2) && (
                      <span className={`rounded-full px-3 py-1.5 text-[9px] font-black tracking-wide ${
                        (index === 1 && expandedMetric === "ports") || (index === 2 && expandedMetric === "customs")
                          ? "bg-[var(--navy)] text-white"
                          : "bg-[var(--canvas)] text-[var(--teal)]"
                      }`}>
                        {(index === 1 && expandedMetric === "ports") || (index === 2 && expandedMetric === "customs")
                          ? "HIDE DETAILS"
                          : index === 1
                            ? "VIEW PIPELINE"
                            : "VIEW HOLDS"}
                      </span>
                    )}
                  </div>
                  <div className="mb-2 min-h-10 max-w-[15rem] text-sm leading-5 font-semibold text-[var(--muted)]">{item.label}</div>
                  <div className="text-3xl font-bold tracking-tight">{item.value}</div>
                  <div className={`mt-4 text-xs font-semibold ${index === 2 ? "text-[var(--warning)]" : "text-[var(--success)]"}`}>
                    {item.trend}
                  </div>
                </button>

                {index === 1 && expandedMetric === "ports" && (
                  <div className="mt-5 overflow-hidden rounded-2xl bg-[var(--navy)] text-white">
                    <div className="border-b border-white/10 px-4 py-3">
                      <h3 className="text-sm font-bold">🚨 Core Handoff Pipeline Delays</h3>
                    </div>
                    <div className="space-y-2 p-3">
                      <div className="rounded-xl bg-white/7 p-3 text-[11px] leading-5 text-white/70">
                        <b className="text-white">Mundra Port (APSEZ):</b> 22 Containers delayed at Siding-2 (Awaiting FOIS wagon positioning slots)
                      </div>
                      <div className="rounded-xl bg-white/7 p-3 text-[11px] leading-5 text-white/70">
                        <b className="text-white">JNPT Mumbai:</b> 14 Containers holding at Terminal-3 yard (Awaiting gate-out transport authorization passes)
                      </div>
                    </div>
                  </div>
                )}

                {index === 2 && expandedMetric === "customs" && (
                  <div className="mt-5 overflow-hidden rounded-2xl bg-[var(--navy)] text-white">
                    <div className="border-b border-white/10 px-4 py-3">
                      <h3 className="text-sm font-bold">🛃 Regulatory Hold Ingestions</h3>
                    </div>
                    <div className="space-y-2 p-3">
                      <div className="rounded-xl bg-white/7 p-3 text-[11px] leading-5 text-white/70">
                        <b className="text-white">ICEGATE Discrepancy Log:</b> 4 Shipments flagged with Error Code ICE-9902 (Gross Weight Mismatch)
                      </div>
                      <div className="rounded-xl bg-white/7 p-3 text-[11px] leading-5 text-white/70">
                        <b className="text-white">PGA Review Queue:</b> 2 Shipments awaiting priority allied agency clearance validation tokens
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </section>

          <section className="mb-6 overflow-hidden rounded-2xl bg-[var(--navy)] shadow-[var(--card-shadow-hover)]">
            <div className="px-5 py-4 text-white">
              <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Surface logistics control</div>
              <h2 className="mt-1 text-lg font-bold">Active Hinterland Tracking Streams</h2>
              <p className="mt-1 text-[11px] leading-5 text-white/45">Live rail and road links from port gate-out to inland destination</p>
            </div>

            <div className="bg-[var(--canvas)] px-3 pt-3">
              <div className="rounded-2xl bg-white p-3 shadow-[var(--card-shadow)]">
                <div className="mb-3 text-[10px] font-black tracking-[0.12em] text-[var(--navy)] uppercase">Transit Schedule Controls</div>
                <div className="grid grid-cols-1 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setScheduleMode("active");
                      notify("Active rake schedules selected");
                    }}
                    className={`w-full rounded-full border border-[var(--navy)] px-4 py-3 text-center text-[11px] font-black tracking-wide transition ${
                      scheduleMode === "active"
                        ? "bg-[var(--success-soft)] text-[var(--success)] ring-2 ring-[var(--success)]/25 shadow-[0_0_16px_var(--success-glow)]"
                        : "bg-white text-[var(--navy)]"
                    }`}
                  >
                    Active Rake Schedules
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setScheduleMode("delayed");
                      notify("Delayed connection check selected");
                    }}
                    className={`w-full rounded-full border border-[var(--navy)] px-4 py-3 text-center text-[11px] font-black tracking-wide transition ${
                      scheduleMode === "delayed"
                        ? "bg-[var(--warning-soft)] text-[var(--warning)] ring-2 ring-[var(--warning)]/20"
                        : "bg-white text-[var(--navy)]"
                    }`}
                  >
                    Delayed Connections
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3 bg-[var(--canvas)] p-3">
              <article
                className="w-full overflow-hidden rounded-2xl bg-white p-4 text-left shadow-[var(--card-shadow)] transition active:scale-[0.99]"
              >
                <span className="flex items-start gap-3">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--aqua)] shadow-lg shadow-[var(--navy-shadow)]"><Icon name="train" size={27} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block break-words text-sm font-black tracking-tight text-[var(--navy)]">RAIL: FOIS-RAKE-772A</span>
                    <span className="mt-1 block break-words text-[10px] leading-4 text-[var(--muted)]">Wagon: CR-409124 | Weight: 24.5 MT | Commodity: Industrial Electronics</span>
                  </span>
                </span>

                <span className="mt-5 block">
                  <span className="relative block h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
                    <span className="absolute inset-y-0 left-0 w-[64%] rounded-full bg-[var(--success)]" />
                  </span>
                  <span className="mt-4 block space-y-3">
                    {[
                      ["Origin", "Mundra Port Siding (Gate-Out 08:30)", true],
                      ["Current", "Passing Samakhiyali Junction", true],
                      ["Destination", "ICD Dashrath, Vadodara (ETA: 14:00)", false],
                    ].map(([label, detail, complete]) => (
                      <span key={label as string} className="flex items-start gap-3">
                        <span className={`mt-1 size-2.5 shrink-0 rounded-full ${complete ? "bg-[var(--success)]" : "bg-[var(--line)]"}`} />
                        <span className="min-w-0">
                          <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</span>
                          <span className="mt-0.5 block break-words text-xs font-semibold text-[var(--ink)]">{detail}</span>
                        </span>
                      </span>
                    ))}
                  </span>
                </span>

                <span className="mt-5 inline-flex rounded-full bg-[var(--success)] px-3 py-1.5 text-[10px] font-black tracking-wider text-white">ON SCHEDULE</span>

                <span className="mt-4 block rounded-2xl bg-[var(--navy)] p-4 text-white">
                  <span className="block text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Active FOIS position stream</span>
                  <span className="mt-1 block text-sm font-bold">Live Transit Corridor Schedule Tracking</span>

                  <span className="relative mt-5 block">
                    <span className="absolute top-3 bottom-3 left-3.5 w-px bg-white/15" aria-hidden="true" />

                    <span className="relative mb-5 flex items-start gap-3">
                      <span className="z-[1] grid size-7 shrink-0 place-items-center rounded-full bg-[var(--success)] text-[11px] font-black text-white shadow-[0_0_0_4px_rgba(25,135,84,0.16)]">✓</span>
                      <span className="min-w-0 pt-1">
                        <span className="block break-words text-[11px] leading-5 font-semibold text-white">
                          Mundra Port Siding — Departed: 08:30 AM
                        </span>
                      </span>
                    </span>

                    <span className="relative mb-5 flex items-start gap-3">
                      <span className="z-[1] grid size-7 shrink-0 place-items-center rounded-full bg-[var(--success)] text-[11px] font-black text-white shadow-[0_0_0_4px_rgba(25,135,84,0.16)]">✓</span>
                      <span className="min-w-0 pt-1">
                        <span className="block break-words text-[11px] leading-5 font-semibold text-white">
                          Samakhiyali Junction — Passed: 11:45 AM
                        </span>
                      </span>
                    </span>

                    <span className="relative mb-5 flex items-start gap-3">
                      <span className="corridor-radar z-[1] grid size-7 shrink-0 place-items-center rounded-full bg-[var(--info)]/20">
                        <span className="size-2.5 rounded-full bg-[var(--info)]" />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block break-words text-[11px] leading-5 font-bold text-[var(--aqua)]">
                          Live Position: Approving Ahmedabad Yard Corridor (FASTag &amp; RFID active) — Status: Passing at 65 km/h
                        </span>
                      </span>
                    </span>

                    <span className="relative flex items-start gap-3">
                      <span className="z-[1] grid size-7 shrink-0 place-items-center rounded-full border-2 border-white/25 bg-[var(--navy)]">
                        <span className="size-2 rounded-full bg-white/25" />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block break-words text-[11px] leading-5 font-semibold text-white/45">
                          Target Terminal: ICD Dashrath, Vadodara — Scheduled Arrival ETA: 04:30 AM
                        </span>
                      </span>
                    </span>
                  </span>
                </span>

                <button
                  type="button"
                  onClick={() => setLiveLocationMode("train")}
                  className="mt-4 flex w-full items-center justify-between rounded-xl bg-[var(--navy)] px-4 py-3 text-xs font-bold text-white shadow-lg shadow-[var(--navy-shadow)]"
                >
                  <span className="flex items-center gap-2"><Icon name="train" size={16} /> View Train Live Location</span>
                  <Icon name="chevron" size={15} />
                </button>
              </article>

              <article
                className="w-full overflow-hidden rounded-2xl bg-white p-4 text-left shadow-[var(--card-shadow)] transition active:scale-[0.99]"
              >
                <span className="flex items-start gap-3">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[var(--danger)] text-white shadow-[0_0_18px_var(--danger-glow)]"><Icon name="truck" size={27} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block break-words text-sm font-black tracking-tight text-[var(--navy)]">ROAD: FLEET-DISPATCH-GJ06</span>
                    <span className="mt-1 block break-words text-[10px] leading-4 text-[var(--muted)]">Vehicle: GJ-06-ZZ-1234 | Driver: K. Singh | E-Way Bill: GST-990123</span>
                  </span>
                </span>

                <span className="mt-5 block">
                  <span className="relative block h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
                    <span className="absolute inset-y-0 left-0 w-[48%] rounded-full bg-[var(--info)] shadow-[0_0_12px_var(--info-glow)]" />
                  </span>
                  <span className="mt-4 block space-y-3">
                    {[
                      ["Origin", "ICD Dashrath Terminal", true],
                      ["Route", "NH-48 Express Corridor", true],
                      ["Destination", "Adani SEZ Manufacturing Hub", false],
                    ].map(([label, detail, complete]) => (
                      <span key={label as string} className="flex items-start gap-3">
                        <span className={`mt-1 size-2.5 shrink-0 rounded-full ${complete ? "bg-[var(--info)]" : "bg-[var(--line)]"}`} />
                        <span className="min-w-0">
                          <span className="block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</span>
                          <span className="mt-0.5 block break-words text-xs font-semibold text-[var(--ink)]">{detail}</span>
                        </span>
                      </span>
                    ))}
                  </span>
                </span>

                <span className="mt-5 inline-flex rounded-full bg-[var(--info)] px-3 py-1.5 text-[10px] font-black tracking-wider text-white shadow-[0_0_18px_var(--info-glow)]">IN TRANSIT (FASTag Active)</span>

                <button
                  type="button"
                  onClick={() => setLiveLocationMode("truck")}
                  className="mt-4 flex w-full items-center justify-between rounded-xl bg-[var(--info)] px-4 py-3 text-xs font-bold text-white shadow-[0_0_18px_var(--info-glow)]"
                >
                  <span className="flex items-center gap-2"><Icon name="truck" size={16} /> View Truck Live Location</span>
                  <Icon name="chevron" size={15} />
                </button>
              </article>
            </div>
          </section>

          <section className="overview-main-grid mb-6 grid gap-6 xl:grid-cols-[1.55fr_1fr]">
            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] p-5">
                <div>
                  <h2 className="font-bold">Global movement</h2>
                  <p className="mt-1 text-xs text-[var(--muted)]">Live vessel and cargo positions</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-2 rounded-lg bg-[var(--canvas)] px-3 py-2 text-xs font-semibold">
                    36 active
                  </span>
                  <button
                    type="button"
                    aria-label="Map filters"
                    onClick={() => notify("Map filters opened")}
                    className="grid size-9 place-items-center rounded-lg border border-[var(--line)] text-[var(--muted)]"
                  >
                    <Icon name="filter" size={17} />
                  </button>
                </div>
              </div>
              <div className="world-map relative h-[340px] overflow-hidden bg-[var(--map)]">
                <div className="map-grid absolute inset-0" />
                <div className="land land-one" />
                <div className="land land-two" />
                <div className="land land-three" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 340" preserveAspectRatio="none">
                  <path className="route-line" d="M90 120 Q250 20 395 165 T720 105" />
                  <path className="route-line route-delay" d="M145 255 Q310 130 475 225 T690 235" />
                </svg>
                {(mapLayer === "Ports"
                  ? portInformation.map((port) => ({ ...port, icon: "anchor" as IconName }))
                  : [
                      { label: "Maersk Elba", x: "51%", y: "38%", icon: "ship" as IconName },
                      { label: "MSC Vega", x: "75%", y: "67%", icon: "ship" as IconName },
                      { label: "CMA CGM Jules", x: "62%", y: "56%", icon: "ship" as IconName },
                      { label: "Ocean Pioneer", x: "13%", y: "42%", icon: "ship" as IconName },
                    ]
                ).map((pin) => (
                  <button
                    type="button"
                    key={pin.label}
                    onClick={() => {
                      if (mapLayer === "Ports") {
                        const port = portInformation.find((item) => item.label === pin.label);
                        if (port) setSelectedPortInfo(port);
                      } else {
                        notify(`${pin.label}: operations normal`);
                      }
                    }}
                    className={`map-pin absolute ${mapLayer === "Weather" ? "hidden" : ""}`}
                    style={{ left: pin.x, top: pin.y }}
                  >
                    <span><Icon name={pin.icon} size={15} /></span>
                    <b>{pin.label}</b>
                  </button>
                ))}

                {mapLayer === "Weather" && (
                  <>
                    {[
                      { region: "Arabian Sea", condition: "Clear · 18 kn winds", x: "57%", y: "42%" },
                      { region: "Bay of Bengal", condition: "Rain cells · 24 kn winds", x: "74%", y: "54%" },
                      { region: "Indian Ocean", condition: "Moderate swell · 2.1 m", x: "65%", y: "75%" },
                    ].map((weather) => (
                      <button
                        type="button"
                        key={weather.region}
                        onClick={() => notify(`${weather.region}: ${weather.condition}`)}
                        className="absolute z-[3] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[var(--navy)] px-3 py-2 text-left text-white shadow-lg"
                        style={{ left: weather.x, top: weather.y }}
                      >
                        <span className="block text-[10px] font-bold text-[var(--aqua)]">{weather.region}</span>
                        <span className="mt-1 block text-[9px] whitespace-nowrap text-white/60">{weather.condition}</span>
                      </button>
                    ))}
                  </>
                )}

                <div className="map-layer-controls absolute bottom-4 left-4 z-10 flex gap-1 rounded-xl border border-white/70 bg-white/90 p-1.5 text-[10px] font-semibold text-[var(--muted)] shadow-lg backdrop-blur">
                  {(["Vessels", "Ports", "Weather"] as const).map((layer) => (
                    <button
                      type="button"
                      key={layer}
                      onClick={() => {
                        setMapLayer(layer);
                        notify(`${layer} map layer activated`);
                      }}
                      className={`rounded-lg px-3 py-2 transition ${
                        mapLayer === layer
                          ? "bg-[var(--navy)] text-white"
                          : "hover:bg-[var(--canvas)] hover:text-[var(--navy)]"
                      }`}
                    >
                      {layer}
                    </button>
                  ))}
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white p-5 shadow-[var(--card-shadow)]">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h2 className="font-bold">Attention required</h2>
                  <p className="mt-1 text-xs text-[var(--muted)]">Items that may impact delivery</p>
                </div>
                <span className="rounded-full bg-[var(--danger-soft)] px-2.5 py-1 text-xs font-bold text-[var(--danger)]">4</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Customs documents missing", meta: "CMAU 5108820 · Antwerp", time: "Due in 4h", tone: "danger" },
                  { title: "Severe weather warning", meta: "South China Sea · 3 vessels", time: "Updated 12m", tone: "warning" },
                  { title: "Port congestion detected", meta: "Singapore PSA Terminal", time: "+18h delay", tone: "warning" },
                  { title: "Rail connection rescheduled", meta: "Rotterdam → Duisburg", time: "Tomorrow", tone: "info" },
                ].map((alert) => (
                  <button
                    type="button"
                    key={alert.title}
                    onClick={() => notify(alert.title)}
                    className="flex w-full items-center gap-3 rounded-xl border border-[var(--line)] p-3 text-left transition hover:border-[var(--aqua)] hover:bg-[var(--canvas)]"
                  >
                    <span className={`status-dot ${alert.tone}`} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">{alert.title}</span>
                      <span className="mt-1 block truncate text-xs text-[var(--muted)]">{alert.meta}</span>
                    </span>
                    <span className="text-[10px] font-semibold whitespace-nowrap text-[var(--muted-light)]">{alert.time}</span>
                    <Icon name="chevron" size={15} />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => notify("Showing all operational alerts")}
                className="mt-4 w-full rounded-xl bg-[var(--canvas)] py-3 text-xs font-bold text-[var(--teal)] transition hover:bg-[var(--aqua-soft)]"
              >
                View all alerts
              </button>
            </article>
          </section>

          <section className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
            <div className="flex flex-col gap-4 border-b border-[var(--line)] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-bold">PCS &amp; ICEGATE live operations</h2>
                <p className="mt-1 text-xs text-[var(--muted)]">Vessel discharge events and customs-clearance signals in one operational feed</p>
              </div>
              <div className="mobile-only relative md:hidden">
                <Icon name="search" size={17} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search shipments..."
                  className="w-full border-b border-[var(--line)] py-2 pl-7 text-sm outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => notify("Showing all 248 shipments")}
                className="text-xs font-bold text-[var(--teal)]"
              >
                View all shipments
              </button>
            </div>
            <div className="mobile-records space-y-3 p-3 md:hidden">
              {filtered.map((shipment) => (
                <button
                  type="button"
                  key={shipment.id}
                  onClick={() => setSelectedShipment(shipment)}
                  className="w-full max-w-full overflow-hidden rounded-2xl bg-[var(--canvas)] text-left"
                >
                  <span className="block p-4">
                    <span className="block text-[9px] font-bold tracking-[0.12em] text-[var(--muted-light)] uppercase">Vessel / Consignment Code</span>
                    <span className="mt-1 block break-words text-base font-bold text-[var(--navy)]">{shipment.id}</span>

                    <span className="mt-4 block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Cargo Type</span>
                    <span className="mt-1 block break-words text-sm font-semibold text-[var(--ink)]">{shipment.type}</span>

                    <span className="mt-3 block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Vessel / Transport</span>
                    <span className="mt-1 block break-words text-sm font-semibold text-[var(--ink)]">{shipment.vessel}</span>

                    <span className="mt-3 block text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Live PCS Event</span>
                    <span className="mt-1 block break-words text-xs leading-5 text-[var(--muted)]">{shipment.pcsEvent} · {shipment.pcsDetail}</span>
                  </span>
                  <span className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-xs font-bold ${
                    shipment.icegateStatus === "Out of charge"
                      ? "bg-[var(--success)] text-white"
                      : shipment.icegateStatus === "Documents required"
                        ? "bg-[var(--danger)] text-white"
                        : "bg-[var(--warning)] text-white"
                  }`}>
                    <span className="min-w-0 break-words">{shipment.icegateStatus}</span>
                    <Icon name="chevron" size={15} />
                  </span>
                </button>
              ))}
            </div>
            <div className="desktop-ledger hidden overflow-x-auto md:block">
              <table className="w-full min-w-[1100px] border-collapse">
                <thead>
                  <tr className="bg-[var(--canvas)] text-left text-[10px] font-bold tracking-[0.12em] text-[var(--muted-light)] uppercase">
                    <th className="px-5 py-3">Vessel / consignment</th>
                    <th className="px-5 py-3">PCS vessel discharge log</th>
                    <th className="px-5 py-3">ICEGATE customs clearance</th>
                    <th className="px-5 py-3">Route / ETA</th>
                    <th className="px-5 py-3">Tracking signal</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((shipment) => (
                    <tr key={shipment.id} className="border-t border-[var(--line)] transition hover:bg-[var(--canvas)]">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <span className="grid size-10 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--teal)]">
                            <Icon name={shipment.mode} size={19} />
                          </span>
                          <div>
                            <div className="text-sm font-bold">{shipment.id}</div>
                            <div className="mt-1 text-xs text-[var(--muted)]">{shipment.type} · {shipment.vessel}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <button type="button" onClick={() => notify(`PCS log opened: ${shipment.pcsEvent}`)} className="text-left">
                          <span>
                            <span className="block text-sm font-bold">{shipment.pcsEvent}</span>
                            <span className="mt-1 block text-xs text-[var(--muted)]">{shipment.pcsDetail}</span>
                            <span className="mt-1.5 block text-[9px] font-bold tracking-wider text-[var(--teal)] uppercase">PCS event stream</span>
                          </span>
                        </button>
                      </td>
                      <td className="px-5 py-4">
                        <button type="button" onClick={() => notify(`ICEGATE status: ${shipment.icegateStatus}`)} className="text-left">
                          <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-[10px] font-bold ${
                            shipment.icegateStatus === "Out of charge"
                              ? "bg-[var(--success-soft)] text-[var(--success)]"
                              : shipment.icegateStatus === "Documents required"
                                ? "bg-[var(--danger-soft)] text-[var(--danger)]"
                                : "bg-[var(--warning-soft)] text-[var(--warning)]"
                          }`}>
                            {shipment.icegateStatus}
                          </span>
                          <span className="mt-2 block text-xs text-[var(--muted)]">{shipment.icegateDetail}</span>
                        </button>
                      </td>
                      <td className="px-5 py-4">
                        <div className="text-sm font-semibold">{shipment.from}</div>
                        <div className="mt-1 flex items-center gap-1 text-xs text-[var(--muted)]">
                          <Icon name="route" size={12} /> {shipment.to}
                        </div>
                        <div className="mt-2 text-xs font-bold">ETA {shipment.eta}</div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="signal-bars" aria-label="Live tracking signal"><i /><i /><i /></span>
                          <div>
                            <div className="text-xs font-bold text-[var(--success)]">Receiving</div>
                            <div className="mt-1 text-[10px] text-[var(--muted)]">{shipment.signal}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          aria-label={`Open ${shipment.id}`}
                          onClick={() => setSelectedShipment(shipment)}
                          className="grid size-9 place-items-center rounded-lg border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--teal)] hover:text-[var(--teal)]"
                        >
                          <Icon name="chevron" size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <div className="py-12 text-center text-sm text-[var(--muted)]">No matching shipments found.</div>
              )}
            </div>
          </section>

          <section className="transport-modules mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { mode: "Sea freight", detail: "36 vessels · 182 containers", icon: "ship" as IconName, target: "Vessels" },
              { mode: "Rail cargo", detail: "12 trains · 48 wagons", icon: "train" as IconName, target: "Rail & Road" },
              { mode: "Road transport", detail: "67 trucks · 9 delayed", icon: "truck" as IconName, target: "Rail & Road" },
              { mode: "Air cargo", detail: "18 flights · 24.6 tonnes", icon: "plane" as IconName, target: "Air Cargo" },
            ].map((item) => (
              <button
                type="button"
                key={item.mode}
                onClick={() => {
                  setActiveNav(item.target);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-[var(--card-shadow)] transition hover:-translate-y-0.5 hover:shadow-[var(--card-shadow-hover)]"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--teal)]">
                  <Icon name={item.icon} size={21} />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-bold">{item.mode}</span>
                  <span className="mt-1 block text-xs text-[var(--muted)]">{item.detail}</span>
                </span>
                <Icon name="chevron" size={16} />
              </button>
            ))}
          </section>
            </>
          ) : activeNav === "Settings" ? (
            <SettingsWorkspace
              darkMode={darkMode}
              language={language}
              onDarkModeChange={setDarkMode}
              onLanguageChange={setLanguage}
              onAction={notify}
            />
          ) : (
            <ModuleWorkspace
              module={activeNav}
              onAction={notify}
              onShipment={setSelectedShipment}
              onRawExport={setRawExportModule}
            />
          )}
        </div>
      </main>

      {selectedPortInfo && (
        <section className="port-info-overlay fixed inset-0 z-[86] flex flex-col bg-[var(--canvas)]">
          <header className="flex items-center justify-between bg-[var(--navy)] px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-[var(--aqua)]"><Icon name="anchor" size={21} /></span>
              <div>
                <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Live port intelligence</div>
                <h2 className="mt-0.5 text-base font-bold">Port &amp; Offshore Information</h2>
              </div>
            </div>
            <button type="button" onClick={() => setSelectedPortInfo(null)} className="grid size-9 place-items-center rounded-xl bg-white/10" aria-label="Close port information">
              <span className="text-lg leading-none">×</span>
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-3">
            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow-hover)]">
              <div className="relative overflow-hidden bg-[var(--navy)] p-5 text-white">
                <div className="absolute -top-10 -right-8 size-32 rounded-full bg-[var(--aqua)]/10" />
                <div className="relative">
                  <div className="text-[10px] font-bold tracking-wider text-[var(--aqua)]">{selectedPortInfo.code}</div>
                  <h3 className="mt-1 text-2xl font-bold">{selectedPortInfo.label}</h3>
                  <div className="mt-4 inline-flex rounded-full bg-[var(--success)] px-3 py-1.5 text-[10px] font-black">OPERATIONS ACTIVE</div>
                </div>
              </div>

              <div className="space-y-3 p-4">
                {[
                  ["Berth utilization", selectedPortInfo.berth, "anchor" as IconName],
                  ["Terminal capacity", selectedPortInfo.capacity, "dashboard" as IconName],
                  ["Port congestion", selectedPortInfo.congestion, "clock" as IconName],
                  ["Next movement", selectedPortInfo.movement, "route" as IconName],
                  ["Offshore asset", selectedPortInfo.offshoreAsset, "ship" as IconName],
                  ["Telemetry status", selectedPortInfo.telemetry, "globe" as IconName],
                ].map(([label, value, icon]) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl bg-[var(--canvas)] p-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--teal)]"><Icon name={icon as IconName} size={17} /></span>
                    <div className="min-w-0">
                      <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</div>
                      <div className="mt-1 break-words text-sm font-bold text-[var(--ink)]">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 bg-[var(--canvas)] p-4">
                <button type="button" onClick={() => notify(`${selectedPortInfo.label} terminal map opened`)} className="rounded-xl bg-[var(--navy)] px-3 py-3 text-xs font-bold text-white">
                  Terminal Map
                </button>
                <button type="button" onClick={() => notify(`${selectedPortInfo.label} offshore telemetry opened`)} className="rounded-xl bg-[var(--teal)] px-3 py-3 text-xs font-bold text-white">
                  Offshore Telemetry
                </button>
              </div>
            </article>
          </div>
        </section>
      )}

      {liveLocationMode && (
        <section className="location-overlay fixed inset-0 z-[85] flex flex-col overflow-y-auto bg-[var(--canvas)]">
          <header className="sticky top-0 z-20 flex items-center justify-between bg-[var(--navy)] px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-[var(--aqua)]">
                <Icon name={liveLocationMode === "train" ? "train" : "truck"} size={20} />
              </span>
              <div>
                <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Customer live tracking</div>
                <h2 className="mt-0.5 text-base font-bold">
                  {liveLocationMode === "train" ? "Train Live Location" : "Truck Live Location"}
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setLiveLocationMode(null)}
              className="grid size-9 place-items-center rounded-xl bg-white/10 text-white"
              aria-label="Close live location"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </header>

          <div className="p-3">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow-hover)]">
              <div className="relative h-64 overflow-hidden bg-[var(--map)]">
                <div className="map-grid absolute inset-0" />
                <div className="absolute top-[18%] left-[-12%] h-40 w-64 rotate-[-8deg] rounded-[45%] bg-[#cedfdb]" />
                <div className="absolute right-[-18%] bottom-[-8%] h-44 w-72 rotate-[12deg] rounded-[48%] bg-[#cedfdb]" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 390 256" preserveAspectRatio="none">
                  <path
                    d={liveLocationMode === "train" ? "M35 205 C105 170 130 100 205 118 S300 95 355 45" : "M28 195 C98 185 112 135 184 142 S277 105 356 78"}
                    fill="none"
                    stroke="var(--teal)"
                    strokeWidth="4"
                    strokeDasharray="7 7"
                  />
                </svg>

                <span className="absolute bottom-8 left-5 rounded-lg bg-white/90 px-2 py-1 text-[9px] font-bold text-[var(--navy)] shadow">ORIGIN</span>
                <span className="absolute top-5 right-4 rounded-lg bg-white/90 px-2 py-1 text-[9px] font-bold text-[var(--navy)] shadow">DESTINATION</span>

                <div
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: liveLocationMode === "train" ? "54%" : "48%",
                    top: liveLocationMode === "train" ? "45%" : "56%",
                  }}
                >
                  <span className="corridor-radar grid size-12 place-items-center rounded-full border-4 border-white bg-[var(--info)] text-white shadow-xl">
                    <Icon name={liveLocationMode === "train" ? "train" : "truck"} size={20} />
                  </span>
                </div>

                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-[var(--success)] px-3 py-1.5 text-[9px] font-black text-white shadow-lg">
                  <span className="size-1.5 rounded-full bg-white" /> LIVE GPS
                </div>
              </div>

              <div className="p-4">
                <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">Current location</div>
                <div className="mt-1 text-lg font-bold text-[var(--navy)]">
                  {liveLocationMode === "train" ? "Ahmedabad Yard Corridor" : "NH-48 · Vadodara Sector"}
                </div>
                <div className="mt-1 text-xs leading-5 text-[var(--muted)]">
                  {liveLocationMode === "train"
                    ? "Approaching Ahmedabad interchange toward ICD Dashrath"
                    : "Northbound toward Adani SEZ Manufacturing Hub"}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    ["Asset ID", liveLocationMode === "train" ? "FOIS-RAKE-772A" : "GJ-06-ZZ-1234"],
                    ["Live speed", liveLocationMode === "train" ? "65 km/h" : "54 km/h"],
                    ["Coordinates", liveLocationMode === "train" ? "23.0216° N, 72.5797° E" : "22.3072° N, 73.1812° E"],
                    ["Signal", liveLocationMode === "train" ? "FOIS + RFID Active" : "FASTag + GPS Active"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl bg-[var(--canvas)] p-3">
                      <div className="text-[9px] font-bold tracking-wider text-[var(--muted-light)] uppercase">{label}</div>
                      <div className="mt-1 break-words text-xs font-bold text-[var(--ink)]">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl bg-[var(--success-soft)] px-3 py-3 text-[10px]">
                  <span className="font-bold text-[var(--success)]">Location receiving normally</span>
                  <span className="text-[var(--muted)]">Updated 12 sec ago</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setLiveLocationMode(null)}
              className="mt-3 w-full rounded-xl bg-[var(--navy)] py-3.5 text-sm font-bold text-white"
            >
              Return to Tracking Streams
            </button>
          </div>
        </section>
      )}

      {showTransitLog && (
        <>
        <section className="transit-screen transit-mobile-screen fixed inset-0 z-[75] overflow-y-auto bg-[var(--canvas)]">
          <header className="sticky top-0 z-20 bg-[var(--navy)] px-3 py-3 text-white shadow-lg">
            <div className="grid grid-cols-[32px_1fr_32px] items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" aria-label="Gati Shakti Vishwavidyalaya">
                <rect width="32" height="32" rx="9" fill="white" />
                <path d="M7 21V11l9-5 9 5v10l-9 5-9-5Z" fill="none" stroke="var(--accent-orange)" strokeWidth="2" />
                <path d="M10 19h12M11 14h10M13 10h6" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="10" cy="22" r="2" fill="var(--primary)" />
                <circle cx="22" cy="22" r="2" fill="var(--primary)" />
              </svg>
              <div className="min-w-0 text-center">
                <div className="text-[8px] font-bold tracking-[0.12em] text-[var(--aqua)] uppercase">GSV · ULIP Connected</div>
                <h1 className="mt-0.5 truncate text-sm font-bold">Consignment Live Track</h1>
              </div>
              <svg width="32" height="32" viewBox="0 0 32 32" aria-label="Unified Logistics Interface Platform">
                <rect width="32" height="32" rx="9" fill="var(--primary)" />
                <circle cx="16" cy="16" r="9" fill="none" stroke="white" strokeWidth="1.5" opacity=".75" />
                <circle cx="16" cy="16" r="3" fill="white" />
                <path d="M16 7v6m0 6v6M7 16h6m6 0h6M9.7 9.7l4.2 4.2m4.2 4.2 4.2 4.2m0-12.6-4.2 4.2m-4.2 4.2-4.2 4.2" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
          </header>

          <div className="space-y-3 p-3">
            <button
              type="button"
              onClick={() => setShowTransitLog(false)}
              className="flex h-10 items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 text-xs font-bold text-[var(--navy)] shadow-[var(--card-shadow)]"
            >
              <span className="rotate-180"><Icon name="chevron" size={15} /></span>
              Back to Overview
            </button>

            <div className="rounded-2xl bg-[var(--navy)] p-4 text-white shadow-[var(--card-shadow-hover)]">
              <div className="flex items-center justify-between">
                <div className="text-[9px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">Multimodal tracking result</div>
                <span className="rounded-full bg-[var(--success)] px-2.5 py-1 text-[8px] font-black">LIVE</span>
              </div>
              <div className="mt-3 text-lg font-bold">Indian Ocean → Mundra → ICD Dashrath</div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[68%] rounded-full bg-[var(--accent-orange)]" />
              </div>
              <div className="mt-2 flex justify-between text-[9px] text-white/45">
                <span>Origin confirmed</span>
                <span>68% complete</span>
              </div>
            </div>

            <article className="rounded-2xl bg-white p-4">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--aqua-soft)] text-[var(--primary)]"><Icon name="box" size={19} /></span>
                <div className="min-w-0">
                  <div className="text-[9px] font-black tracking-[0.14em] text-[var(--muted-light)] uppercase">Matched Reference</div>
                  <div className="mt-1 break-words text-base font-bold text-[var(--navy)]">{trackerQuery.toUpperCase()}</div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-[var(--canvas)] p-3">
                  <div className="text-[9px] font-bold text-[var(--muted-light)] uppercase">Container Type</div>
                  <div className="mt-1 text-xs font-bold text-[var(--navy)]">40' ISO Container · FCL</div>
                </div>
                <div className="rounded-xl bg-[var(--canvas)] p-3">
                  <div className="text-[9px] font-bold text-[var(--muted-light)] uppercase">Commodity</div>
                  <div className="mt-1 text-xs font-bold text-[var(--navy)]">Industrial Machinery Components</div>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white p-4">
              <div className="flex items-start gap-3">
                <span className="corridor-radar grid size-10 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-white"><Icon name="ship" size={19} /></span>
                <div className="min-w-0">
                  <div className="text-[9px] font-black tracking-[0.14em] text-[var(--muted-light)] uppercase">Current Position</div>
                  <div className="mt-1 break-words text-base font-bold text-[var(--navy)]">Arabian Sea Approach Channel</div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-[var(--canvas)] p-3">
                  <div className="text-[9px] font-bold text-[var(--muted-light)] uppercase">Geographic Coordinates</div>
                  <div className="mt-1 text-xs font-bold text-[var(--navy)]">14.0820° N, 72.8810° E</div>
                </div>
                <div className="rounded-xl bg-[var(--canvas)] p-3">
                  <div className="text-[9px] font-bold text-[var(--muted-light)] uppercase">Carrier State</div>
                  <div className="mt-1 text-xs font-bold text-[var(--primary)]">MAERSK ELBA · Underway at 17.4 kn</div>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white p-4">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--warning-soft)] text-[var(--accent-orange)]"><Icon name="route" size={19} /></span>
                <div className="min-w-0">
                  <div className="text-[9px] font-black tracking-[0.14em] text-[var(--muted-light)] uppercase">Next Handoff</div>
                  <div className="mt-1 break-words text-base font-bold text-[var(--navy)]">Mundra Port Siding</div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-[var(--canvas)] p-3">
                  <div className="text-[9px] font-bold text-[var(--muted-light)] uppercase">Planned Transfer</div>
                  <div className="mt-1 break-words text-xs font-bold text-[var(--navy)]">PCS discharge → EIR verification → FOIS rake allocation</div>
                </div>
                <div className="rounded-xl bg-[var(--canvas)] p-3">
                  <div className="text-[9px] font-bold text-[var(--muted-light)] uppercase">Destination</div>
                  <div className="mt-1 break-words text-xs font-bold text-[var(--navy)]">ICD Dashrath, Vadodara · ETA 04:30 AM</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="legacy-transit-screen hidden">
          <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowTransitLog(false)}
                  className="flex h-10 items-center gap-2 rounded-xl border border-[var(--line)] bg-white px-3 text-xs font-bold text-[var(--muted)] transition hover:border-[var(--teal)] hover:text-[var(--ink)]"
                >
                  <span className="rotate-180"><Icon name="chevron" size={16} /></span>
                  Back to dashboard
                </button>
                <div className="hidden h-8 w-px bg-[var(--line)] sm:block" />
                <div>
                  <div className="text-[10px] font-bold tracking-[0.16em] text-[var(--teal)] uppercase">OM Maritime Grid</div>
                  <h1 className="mt-0.5 text-xl font-bold tracking-tight sm:text-2xl">Multimodal Transit Log - Active Stream</h1>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 rounded-full bg-[var(--success-soft)] px-3 py-2 text-[10px] font-black tracking-wider text-[var(--success)] uppercase">
                  Stream connected
                </span>
                <span className="rounded-full border border-[var(--line)] bg-[var(--canvas)] px-3 py-2 text-[10px] font-bold text-[var(--muted)]">PCS + FOIS</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-[1600px] p-4 sm:p-8">
            <div className="mb-6 overflow-hidden rounded-2xl bg-[var(--navy)] text-white">
              <div className="grid gap-6 p-6 md:grid-cols-[1.4fr_1fr] md:items-center">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase"><Icon name="route" size={15} /> Active multimodal corridor</div>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-lg font-bold sm:text-2xl">
                    <span>Mundra Port · Berth CT-4</span>
                    <Icon name="chevron" />
                    <span>Mundra Port Siding</span>
                    <Icon name="chevron" />
                    <span>Indian Railways</span>
                  </div>
                  <p className="mt-3 text-sm text-white/50">Container discharge, EIR verification, yard transfer and FOIS wagon loading events consolidated in sequence.</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    ["42", "Discharged"],
                    ["36", "Rail loaded"],
                    ["6", "At siding"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <div className="text-2xl font-bold text-[var(--aqua)]">{value}</div>
                      <div className="mt-1 text-[10px] font-bold tracking-wider text-white/40 uppercase">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid border-t border-white/10 bg-white/4 sm:grid-cols-4">
                {[
                  ["Vessel", "MAERSK ELBA · IMO 9458078"],
                  ["PCS voyage", "ME2409E"],
                  ["FOIS rake", "RKE-WR-240916-MUN-04"],
                  ["Wagon allocation", "WAID-WR-CONT-88421"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-white/10 p-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0">
                    <div className="text-[9px] font-bold tracking-wider text-white/30 uppercase">{label}</div>
                    <div className="mt-1.5 text-xs font-bold">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <article className="overflow-hidden rounded-2xl bg-white shadow-[var(--card-shadow)]">
              <div className="flex flex-col gap-3 border-b border-[var(--line)] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-bold">Container handoff parameters</h2>
                  <p className="mt-1 text-xs text-[var(--muted)]">Live sequence from PCS vessel-discharge log to FOIS rake loading</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                  <Icon name="clock" size={14} /> Last event received 12 seconds ago
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1250px] border-collapse">
                  <thead>
                    <tr className="bg-[var(--canvas)] text-left text-[9px] font-bold tracking-[0.11em] text-[var(--muted-light)] uppercase">
                      <th className="px-4 py-3">Container</th>
                      <th className="px-4 py-3">PCS discharge event</th>
                      <th className="px-4 py-3">Berth / slot</th>
                      <th className="px-4 py-3">EIR &amp; seal check</th>
                      <th className="px-4 py-3">Port-to-siding handoff</th>
                      <th className="px-4 py-3">FOIS rake / wagon</th>
                      <th className="px-4 py-3">Gross weight</th>
                      <th className="px-4 py-3">Active status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["MSKU 7439821", "14:28:18 · Discharged", "CT-4 · Bay 18-02", "EIR 772184 · Intact", "Accepted · 14:46", "MUN-04 · BLC-88421", "28,460 kg", "Loaded on wagon"],
                      ["TCLU 2941057", "14:29:42 · Discharged", "CT-4 · Bay 18-04", "EIR 772185 · Intact", "Accepted · 14:49", "MUN-04 · BLC-88422", "26,120 kg", "Loaded on wagon"],
                      ["CMAU 5108820", "14:31:06 · Discharged", "CT-4 · Bay 20-01", "EIR 772186 · Intact", "Accepted · 14:53", "MUN-04 · BLC-88423", "30,040 kg", "Loading now"],
                      ["MAEU 8842193", "14:33:51 · Discharged", "CT-4 · Bay 20-03", "EIR 772187 · Verified", "Yard tractor YT-31", "MUN-04 · BLC-88424", "24,870 kg", "At rail siding"],
                      ["MSCU 7710284", "14:35:24 · Discharged", "CT-4 · Bay 22-02", "EIR 772188 · Verified", "Yard tractor YT-34", "MUN-04 · BLC-88425", "27,310 kg", "In port transit"],
                      ["TEMU 4819236", "14:37:02 · Discharged", "CT-4 · Bay 22-04", "EIR 772189 · Intact", "Transfer queued", "MUN-04 · Allocation pending", "25,960 kg", "Handoff queued"],
                    ].map((row, rowIndex) => (
                      <tr key={row[0]} className="border-t border-[var(--line)] transition hover:bg-[var(--canvas)]">
                        {row.map((cell, index) => (
                          <td key={`${row[0]}-${index}`} className="px-4 py-4">
                            {index === 0 ? (
                              <div className="flex items-center gap-3">
                                <span className="grid size-9 place-items-center rounded-lg bg-[var(--aqua-soft)] text-[var(--teal)]"><Icon name="box" size={17} /></span>
                                <div><div className="text-sm font-bold">{cell}</div><div className="mt-1 text-[10px] text-[var(--muted)]">40' ISO container</div></div>
                              </div>
                            ) : index === 7 ? (
                              <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-[10px] font-bold ${
                                rowIndex < 2
                                  ? "bg-[var(--success-soft)] text-[var(--success)]"
                                  : rowIndex === 2
                                    ? "bg-[var(--aqua-soft)] text-[var(--teal)]"
                                    : "bg-[var(--warning-soft)] text-[var(--warning)]"
                              }`}>
                                {cell}
                              </span>
                            ) : (
                              <span className={`text-xs ${index === 5 ? "font-bold text-[var(--ink)]" : "text-[var(--muted)]"}`}>{cell}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <div className="mt-5 flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-white p-4 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
              <span>Stream sequence: PCS discharge → terminal EIR → yard movement → port siding → FOIS wagon allocation</span>
              <span className="font-semibold">Refresh cadence 15 sec</span>
            </div>
          </div>
        </section>
        </>
      )}

      {selectedShipment && (
        <>
          <button
            type="button"
            aria-label="Close shipment details"
            onClick={() => setSelectedShipment(null)}
            className="fixed inset-0 z-40 bg-[var(--navy)]/45 backdrop-blur-sm"
          />
          <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-xl overflow-y-auto bg-white shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[var(--line)] bg-white/95 p-5 backdrop-blur">
              <div>
                <div className="text-[10px] font-bold tracking-[0.14em] text-[var(--teal)] uppercase">Complete cargo record</div>
                <h2 className="mt-1 text-xl font-bold">{selectedShipment.id}</h2>
              </div>
              <button type="button" onClick={() => setSelectedShipment(null)} className="rounded-xl border border-[var(--line)] px-3 py-2 text-sm font-bold">Close</button>
            </div>
            <div className="p-5">
              <div className="mb-5 rounded-2xl bg-[var(--navy)] p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-white/10"><Icon name={selectedShipment.mode} /></span>
                  <span className="rounded-full bg-[var(--aqua)] px-3 py-1 text-[10px] font-bold text-[var(--navy)]">{selectedShipment.status}</span>
                </div>
                <div className="mt-6 text-sm text-white/50">Current movement</div>
                <div className="mt-2 text-lg font-bold">{selectedShipment.from} → {selectedShipment.to}</div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[var(--aqua)]" style={{ width: `${selectedShipment.progress}%` }} /></div>
                <div className="mt-2 text-right text-xs font-semibold text-white/60">{selectedShipment.progress}% complete</div>
              </div>

              <DetailSection title="Cargo & commercial details" items={[
                ["Cargo type", selectedShipment.type],
                ["Commodity", selectedShipment.mode === "plane" ? "Electronic components" : "Industrial machinery parts"],
                ["Packages / weight", selectedShipment.mode === "plane" ? "184 cartons · 2,840 kg" : "22 pallets · 18,460 kg"],
                ["HS code", "8479.89.99"],
                ["Shipper", "Export Industries Ltd."],
                ["Consignee", "Authorized recipient · masked"],
              ]} />
              <DetailSection title="Transport details" items={[
                ["Vessel / Flight", selectedShipment.vessel],
                ["Container / AWB", selectedShipment.id],
                ["Booking reference", "OMG-2025-0916-284"],
                ["Seal number", selectedShipment.mode === "plane" ? "Not applicable" : "INSL 882194"],
                ["ETA", selectedShipment.eta],
                ["Last reported", "16 Sep · 14:32 IST"],
              ]} />
              <DetailSection title="Customs & compliance" items={[
                ["Clearance status", selectedShipment.customs],
                ["Bill of Entry", "BE 4819201"],
                ["Risk assessment", "RMS facilitated"],
                ["PGA / NOC", "No additional NOC required"],
                ["Document integrity", "7 of 7 verified"],
                ["Access class", "Commercial · authorized users"],
              ]} />

              <div className="mt-6 rounded-2xl border border-[var(--line)] p-5">
                <h3 className="font-bold">Journey milestones</h3>
                <div className="mt-5 space-y-5">
                  {["Booking confirmed", "Cargo received at origin", "Customs export cleared", "Departed origin", "Arrival & import clearance"].map((step, index) => (
                    <div key={step} className="flex gap-3">
                      <span className={`mt-1 size-3 rounded-full ${index < 4 ? "bg-[var(--teal)]" : "border-2 border-[var(--line)] bg-white"}`} />
                      <div>
                        <div className="text-sm font-semibold">{step}</div>
                        <div className="mt-1 text-xs text-[var(--muted)]">{index < 4 ? `Completed · ${12 + index} Sep` : `Expected · ${selectedShipment.eta}`}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button type="button" onClick={() => notify(`Raw record export prepared for ${selectedShipment.id}`)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--navy)] py-3.5 text-sm font-bold text-white"><Icon name="download" size={17} /> Export complete record</button>
            </div>
          </aside>
        </>
      )}

      {rawExportModule && (
        <div className="raw-export-overlay fixed inset-0 z-[80] flex items-center justify-center bg-[var(--navy)]/65 p-3 backdrop-blur-sm sm:p-6">
          <div className="raw-export-modal flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07151f] text-white shadow-2xl">
            <div className="raw-export-header flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-[var(--aqua)] uppercase">
                  <span className="live-pulse size-2 rounded-full bg-[var(--aqua)]" />
                  Active container ingestion stream
                </div>
                <h2 className="mt-2 text-xl font-bold">ULIP Data Ingestion Sandbox [Active Array]</h2>
                <p className="mt-1 text-xs text-white/45">{rawExportModule} workspace · Technical stakeholder verification</p>
              </div>
              <button
                type="button"
                onClick={() => setRawExportModule(null)}
                className="self-start rounded-xl border border-white/15 px-4 py-2 text-xs font-bold text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Close inspector
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-b border-white/10 bg-white/4 px-5 py-3 text-xs">
              <span className="rounded-md bg-[var(--success)] px-2 py-1 font-black">200 OK</span>
              <span className="rounded-md bg-white/8 px-2 py-1 font-bold text-[var(--aqua)]">GET</span>
              <code className="text-white/65">/sandbox/v1/containers/MSKU7439821/ingestion</code>
              <span className="ml-auto hidden text-white/35 sm:block">application/json · 4.8 KB · 218 ms</span>
            </div>

            <div className="raw-export-body grid min-h-0 flex-1 lg:grid-cols-[220px_1fr]">
              <aside className="raw-export-sidebar hidden border-r border-white/10 bg-white/3 p-4 lg:block">
                <div className="mb-3 text-[9px] font-bold tracking-widest text-white/30 uppercase">Payload structure</div>
                {[
                  ["container_id", "Active container identity"],
                  ["commodity_type", "ISO equipment profile"],
                  ["pcs_sync_status", "Port Community System"],
                  ["icegate_clearance", "Customs release state"],
                  ["fois_rake_allocation", "Rail allocation state"],
                ].map(([key, detail], index) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => notify(`${key} schema block selected`)}
                    className={`mb-1 w-full rounded-lg px-3 py-2.5 text-left transition hover:bg-white/8 ${index === 0 ? "bg-white/8" : ""}`}
                  >
                    <span className="block font-mono text-xs font-bold text-[var(--aqua)]">{key}</span>
                    <span className="mt-1 block text-[10px] text-white/35">{detail}</span>
                  </button>
                ))}
              </aside>

              <div className="min-h-0 overflow-auto bg-[#061119]">
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#061119]/95 px-5 py-3 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg bg-[var(--aqua)] px-3 py-1.5 text-[10px] font-black text-[var(--navy)]">JSON</span>
                    <span className="text-[10px] text-white/35">UTF-8 · formatted</span>
                  </div>
                  <span className="rounded-full border border-[var(--warning)]/30 bg-[var(--warning)]/10 px-2.5 py-1 text-[9px] font-bold text-[#f6c66f]">SANDBOX DATA</span>
                </div>
                <JsonCodeBlock payload={activeRawPayload} />
              </div>
            </div>

            <div className="raw-export-footer flex flex-col gap-3 border-t border-white/10 bg-white/4 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-2 text-[10px] leading-4 text-white/40">
                <Icon name="globe" size={14} />
                No live ULIP, PCS, ICEGATE or FOIS records are exposed in this demonstration.
              </div>
              <div className="raw-export-actions flex gap-2">
                <button
                  type="button"
                  onClick={async () => {
                    await navigator.clipboard.writeText(JSON.stringify(activeRawPayload, null, 2));
                    notify("Simulated JSON payload copied");
                  }}
                  className="rounded-xl border border-white/15 px-4 py-2.5 text-xs font-bold transition hover:bg-white/10"
                >
                  Copy JSON
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const file = new Blob([JSON.stringify(activeRawPayload, null, 2)], { type: "application/json" });
                    const url = URL.createObjectURL(file);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = "om-ulip-MSKU7439821-active-array.json";
                    link.click();
                    URL.revokeObjectURL(url);
                    notify("Sample JSON downloaded");
                  }}
                  className="flex items-center gap-2 rounded-xl bg-[var(--aqua)] px-4 py-2.5 text-xs font-black text-[var(--navy)]"
                >
                  <Icon name="download" size={15} /> Download sample
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showNewShipment && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-[var(--navy)]/55 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--line)] p-5">
              <div>
                <div className="text-[10px] font-bold tracking-wider text-[var(--teal)] uppercase">Cargo onboarding</div>
                <h2 className="mt-1 text-xl font-bold">Create shipment record</h2>
              </div>
              <button type="button" onClick={() => setShowNewShipment(false)} className="rounded-xl border border-[var(--line)] px-3 py-2 text-sm font-bold">Close</button>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              {[
                ["Shipment / booking number", "e.g. MSKU 1234567"],
                ["Vessel / flight / train", "Enter transport reference"],
                ["Origin", "Port, airport or ICD"],
                ["Destination", "Final delivery location"],
                ["Cargo description", "Commodity and package type"],
                ["HS code", "Enter 6–8 digit code"],
              ].map(([label, placeholder]) => (
                <label key={label} className="block text-xs font-bold text-[var(--muted)]">
                  {label}
                  <input placeholder={placeholder} className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--canvas)] px-3 py-3 text-sm font-medium text-[var(--ink)] outline-none transition focus:border-[var(--teal)]" />
                </label>
              ))}
              <label className="block text-xs font-bold text-[var(--muted)]">
                Transport mode
                <select className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--canvas)] px-3 py-3 text-sm font-medium text-[var(--ink)] outline-none">
                  <option>Sea freight</option><option>Road transport</option><option>Rail cargo</option><option>Air cargo</option>
                </select>
              </label>
              <label className="block text-xs font-bold text-[var(--muted)]">
                Data classification
                <select className="mt-2 w-full rounded-xl border border-[var(--line)] bg-[var(--canvas)] px-3 py-3 text-sm font-medium text-[var(--ink)] outline-none">
                  <option>Commercial</option><option>Government restricted</option><option>Defence authorized</option>
                </select>
              </label>
            </div>
            <div className="flex justify-end gap-3 border-t border-[var(--line)] bg-[var(--canvas)] p-5">
              <button type="button" onClick={() => setShowNewShipment(false)} className="rounded-xl border border-[var(--line)] bg-white px-5 py-3 text-sm font-bold">Save draft</button>
              <button type="button" onClick={() => { setShowNewShipment(false); notify("Shipment record created"); }} className="rounded-xl bg-[var(--navy)] px-5 py-3 text-sm font-bold text-white">Create shipment</button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed right-4 bottom-4 z-[60] flex items-center gap-3 rounded-xl bg-[var(--navy)] px-4 py-3 text-sm font-semibold text-white shadow-2xl">
          <span className="size-2 rounded-full bg-[var(--aqua)]" />
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
