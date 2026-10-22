import { useId, useState } from 'react'

// Small SVG illustrations (used when a photo is missing)
function SvgScene({ variant = 'beach', className = '' }) {
  const id = useId().replace(/:/g, '')
  const props = {
    viewBox: '0 0 400 240',
    preserveAspectRatio: 'xMidYMid slice',
    className: `h-full w-full ${className}`,
    'aria-hidden': true,
  }

  if (variant === 'hills') {
    return (
      <svg {...props}>
        <defs>
          <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7DD3FC" />
            <stop offset="1" stopColor="#E0F7FA" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#${id}a)`} />
        <circle cx="320" cy="60" r="22" fill="#FDE68A" />
        <ellipse cx="90" cy="60" rx="46" ry="12" fill="#fff" opacity=".85" />
        <ellipse cx="125" cy="52" rx="30" ry="10" fill="#fff" opacity=".85" />
        <ellipse cx="260" cy="95" rx="40" ry="10" fill="#fff" opacity=".7" />
        <path d="M0 150 L70 90 L130 140 L200 70 L280 135 L340 95 L400 140 V240 H0Z" fill="#6BBF9A" />
        <path d="M0 175 Q80 120 160 165 T320 150 T400 170 V240 H0Z" fill="#2F9E6E" />
        <path d="M0 205 Q100 165 200 200 T400 190 V240 H0Z" fill="#1B7A57" />
      </svg>
    )
  }

  if (variant === 'island') {
    return (
      <svg {...props}>
        <defs>
          <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#BAE6FD" />
            <stop offset=".45" stopColor="#67E8F9" />
            <stop offset="1" stopColor="#0E7490" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#${id}a)`} />
        <circle cx="75" cy="55" r="24" fill="#FDE68A" />
        <path d="M0 150 q25 -7 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" stroke="#fff" strokeOpacity=".55" strokeWidth="2" fill="none" />
        <path d="M0 185 q25 -7 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" stroke="#fff" strokeOpacity=".4" strokeWidth="2" fill="none" />
        <ellipse cx="220" cy="160" rx="95" ry="20" fill="#F3D9A4" />
        <path d="M222 150 Q226 110 214 80" stroke="#7A4A21" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M214 80 Q190 70 175 88 Q198 78 214 84Z" fill="#16A34A" />
        <path d="M214 80 Q240 62 262 78 Q238 74 214 84Z" fill="#15803D" />
        <path d="M214 80 Q200 55 222 48 Q214 66 216 82Z" fill="#22C55E" />
      </svg>
    )
  }

  if (variant === 'tea') {
    const rows = [
      { y: 110, c: '#4ADE80' }, { y: 135, c: '#22C55E' }, { y: 160, c: '#16A34A' },
      { y: 185, c: '#15803D' }, { y: 212, c: '#166534' },
    ]
    return (
      <svg {...props}>
        <defs>
          <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FDE68A" />
            <stop offset="1" stopColor="#D1FAE5" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#${id}a)`} />
        <path d="M0 105 L60 60 L120 100 L190 50 L260 100 L330 65 L400 100 V130 H0Z" fill="#86EFAC" opacity=".7" />
        {rows.map((r) => (
          <path key={r.y} d={`M0 ${r.y} Q100 ${r.y - 22} 200 ${r.y} T400 ${r.y} V240 H0Z`} fill={r.c} />
        ))}
        {rows.map((r) => (
          <path key={`l${r.y}`} d={`M0 ${r.y + 8} Q100 ${r.y - 14} 200 ${r.y + 8} T400 ${r.y + 8}`} stroke="#fff" strokeOpacity=".25" strokeWidth="2" fill="none" />
        ))}
      </svg>
    )
  }

  if (variant === 'sunrise') {
    return (
      <svg {...props}>
        <defs>
          <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FB7185" />
            <stop offset="1" stopColor="#FDBA74" />
          </linearGradient>
          <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2B4C7E" />
            <stop offset="1" stopColor="#1B2F52" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#${id}a)`} />
        <circle cx="200" cy="130" r="48" fill="#FEF3C7" />
        <rect y="130" width="400" height="110" fill={`url(#${id}b)`} />
        <path d="M170 140 H230 M178 152 H222 M186 164 H214" stroke="#FEF3C7" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
        <path d="M0 200 Q100 185 200 198 T400 192 V240 H0Z" fill="#E8C98E" />
      </svg>
    )
  }

  // default: beach
  return (
    <svg {...props}>
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7DD3FC" />
          <stop offset="1" stopColor="#FDE7C8" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0E9AA7" />
          <stop offset="1" stopColor="#0A6C78" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#${id}a)`} />
      <circle cx="310" cy="65" r="26" fill="#FDBA3B" />
      <rect y="115" width="400" height="80" fill={`url(#${id}b)`} />
      <path d="M0 132 q25 -7 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" stroke="#fff" strokeOpacity=".55" strokeWidth="2" fill="none" />
      <path d="M0 158 q25 -7 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" stroke="#fff" strokeOpacity=".4" strokeWidth="2" fill="none" />
      <path d="M0 192 Q100 172 200 190 T400 182 V240 H0Z" fill="#F3D9A4" />
      <path d="M70 210 Q72 170 62 150" stroke="#7A4A21" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M62 150 Q42 142 30 156 Q50 148 62 154Z" fill="#16A34A" />
      <path d="M62 150 Q84 134 100 148 Q82 146 62 154Z" fill="#15803D" />
    </svg>
  )
}

// Shows a real photo when `image` is given and the file exists.
// If the file is missing, it falls back to the drawing above.
export default function Scene({ variant = 'beach', image, alt = '', className = '' }) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }
  return <SvgScene variant={variant} className={className} />
}