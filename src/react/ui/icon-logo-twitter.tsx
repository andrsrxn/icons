import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguMjE4IDE2LjAwOHMtNC40OTItMi42MDYtMy44NDYtOS43NzRjMCAwIDMuMjMgMy4yNTggNy4xMDQgMy45MVY4Ljg0YzAtMS43OTEgMS40NjYtMy4yOCAzLjI1OC0zLjI1OGEzLjMxOCAzLjMxOCAwIDAgMSAyLjk4NyAxLjk1NWgyLjg3N2wtMi42MDYgMi42MDdjLS4zNDcgNS40NDQtNC44OTMgOS43NzQtMTAuNDI1IDkuNzc0LTIuNjA3IDAtMy4yNTgtLjk3OC0zLjI1OC0uOTc4czIuNjA2LS45NzcgMy45MS0yLjkzMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik04LjIxOCAxNi4wMDhzLTQuNDkyLTIuNjA2LTMuODQ2LTkuNzc0YzAgMCAzLjIzIDMuMjU4IDcuMTA0IDMuOTFWOC44NGMwLTEuNzkxIDEuNDY2LTMuMjggMy4yNTgtMy4yNThhMy4zMTggMy4zMTggMCAwIDEgMi45ODcgMS45NTVoMi44NzdsLTIuNjA2IDIuNjA3Yy0uMzQ3IDUuNDQ0LTQuODkzIDkuNzc0LTEwLjQyNSA5Ljc3NC0yLjYwNyAwLTMuMjU4LS45NzgtMy4yNTgtLjk3OHMyLjYwNi0uOTc3IDMuOTEtMi45MzJaIi8+PC9zdmc+)
 */
export const IconLogoTwitter: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-twitter'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M8.218 16.008s-4.492-2.606-3.846-9.774c0 0 3.23 3.258 7.104 3.91V8.84c0-1.791 1.466-3.28 3.258-3.258a3.318 3.318 0 0 1 2.987 1.955h2.877l-2.606 2.607c-.347 5.444-4.893 9.774-10.425 9.774-2.607 0-3.258-.978-3.258-.978s2.606-.977 3.91-2.932Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.218 16.008s-4.492-2.606-3.846-9.774c0 0 3.23 3.258 7.104 3.91V8.84c0-1.791 1.466-3.28 3.258-3.258a3.318 3.318 0 0 1 2.987 1.955h2.877l-2.606 2.607c-.347 5.444-4.893 9.774-10.425 9.774-2.607 0-3.258-.978-3.258-.978s2.606-.977 3.91-2.932Z'
      />
    </svg>
  )
}
