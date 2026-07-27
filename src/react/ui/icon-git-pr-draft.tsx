import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkgNi41YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWm0wIDExYTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWm0xMSAwYTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOCAxMWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMFptMC00LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjUgOWEyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNVptMCAwdjZtMCAwYTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01Wk0yMCAxNy41YTIuNSAyLjUgMCAxIDEtNSAwIDIuNSAyLjUgMCAwIDEgNSAwWk0xOCAxMWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMFptMC00LjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBaIi8+PC9zdmc+)
 */
export const IconGitPrDraft: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-git-pr-draft'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm11 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
        opacity='.2'
      />
      <path
        fill='currentColor'
        d='M18 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v6m0 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM20 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
      />
    </svg>
  )
}
