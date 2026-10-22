import { useWishlist } from '../context/WishlistContext'

export default function WishlistButton({ id, className = '' }) {
  const { has, toggle } = useWishlist() // useContext via custom hook
  const saved = has(id)
  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-pressed={saved}
      aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
      className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow transition hover:scale-105 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? '#E11D48' : 'none'} stroke={saved ? '#E11D48' : '#10262F'} strokeWidth="2" strokeLinejoin="round">
        <path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0 1 12 6.2 5.4 5.4 0 0 1 21.3 12C19 16.4 12 21 12 21Z" />
      </svg>
    </button>
  )
}
