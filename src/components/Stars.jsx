export default function Stars({ rating }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold" aria-label={`Rating ${rating} out of 5`}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#F5A524" aria-hidden="true">
        <path d="m12 2 3 6.6 7.2.8-5.4 4.9 1.5 7.2L12 17.8 5.7 21.5l1.5-7.2L1.8 9.4 9 8.6 12 2Z" />
      </svg>
      {rating}
    </span>
  )
}
