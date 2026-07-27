import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDIwLjI0N2MzLjYxMyAwIDYuNTQyLTIuNzU1IDYuNTQyLTYuMTU0QzE4LjU0MiA3Ljk3NiAxMiAzLjQzMyAxMiAzLjQzM3MtNi41NDIgNC40NjktNi41NDIgMTAuNjZjMCAzLjM5OSAyLjkyOSA2LjE1NCA2LjU0MiA2LjE1NFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMjAuMjQ3YzMuNjEzIDAgNi41NDItMi43NTUgNi41NDItNi4xNTRDMTguNTQyIDcuOTc2IDEyIDMuNDMzIDEyIDMuNDMzcy02LjU0MiA0LjQ2OS02LjU0MiAxMC42NmMwIDMuMzk5IDIuOTI5IDYuMTU0IDYuNTQyIDYuMTU0WiIvPjwvc3ZnPg==)
 */
export const IconDrop: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-drop'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 20.247c3.613 0 6.542-2.755 6.542-6.154C18.542 7.976 12 3.433 12 3.433s-6.542 4.469-6.542 10.66c0 3.399 2.929 6.154 6.542 6.154Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 20.247c3.613 0 6.542-2.755 6.542-6.154C18.542 7.976 12 3.433 12 3.433s-6.542 4.469-6.542 10.66c0 3.399 2.929 6.154 6.542 6.154Z'
      />
    </svg>
  )
}
