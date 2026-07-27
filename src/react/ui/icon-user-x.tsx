import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMy4wNjhjLTMuNTcyIDAtNi45MDQgMi43MTYtNy40MSA2LjQ4LS4wNzQuNTQ3LjM4Ljk5OC45MzMuOTk4aDEwLjY0M2ExIDEgMCAwIDAgLjczLS4zMTlsMS42OTMtMS44MTVjLjI1OS0uMjc3LjM0NC0uNjguMTgtMS4wMjMtMS4yMzUtMi42LTMuOTI2LTQuMzItNi43NjktNC4zMloiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNi44MDcgOC4yNjFhNC44MDcgNC44MDcgMCAxIDEtOS42MTQgMCA0LjgwNyA0LjgwNyAwIDAgMSA5LjYxNCAwWiIvPjwvZz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDEzLjA2OGE0LjgwNyA0LjgwNyAwIDEgMCAwLTkuNjEzIDQuODA3IDQuODA3IDAgMCAwIDAgOS42MTNabTAgMGMtMy44OCAwLTcuNDc3IDMuMjA1LTcuNDc3IDcuNDc4TTEyIDEzLjA2OGMuODY4IDAgMS43MjEuMTYgMi41MjQuNDU3TTE2IDE2bDQuNjc0IDQuNjc0bTAtNC42NzRMMTYgMjAuNjc0Ii8+PC9zdmc+)
 */
export const IconUserX: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-user-x'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M12 13.068c-3.572 0-6.904 2.716-7.41 6.48-.074.547.38.998.933.998h10.643a1 1 0 0 0 .73-.319l1.693-1.815c.259-.277.344-.68.18-1.023-1.235-2.6-3.926-4.32-6.769-4.32Z'
        />
        <path
          fill='currentColor'
          d='M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 13.068a4.807 4.807 0 1 0 0-9.613 4.807 4.807 0 0 0 0 9.613Zm0 0c-3.88 0-7.477 3.205-7.477 7.478M12 13.068c.868 0 1.721.16 2.524.457M16 16l4.674 4.674m0-4.674L16 20.674'
      />
    </svg>
  )
}
