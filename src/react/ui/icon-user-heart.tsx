import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNi44MDcgOC4yNjFhNC44MDcgNC44MDcgMCAxIDEtOS42MTQgMCA0LjgwNyA0LjgwNyAwIDAgMSA5LjYxNCAwWiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC41OSAxOS41NDhjLjUwNi0zLjc2NCAzLjgzOC02LjQ4IDcuNDEtNi40OCAyLjMxIDAgNC41MiAxLjEzNiA1LjkzIDIuOTU3bC0xLjM4Mi0uMzEyYy0uODY4IDAtMS40MDUuODk2LTEuNDA1IDEuNTE5IDAgMS4zOTggMS4yOTQgMi4zMzMgMi4xNzUgMi45OTdsLjIwOS4xNTcuMjE0LjE2SDUuNTIzYy0uNTUzIDAtMS4wMDctLjQ1LS45MzQtLjk5OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyIDEzLjA2OGE0LjgwNyA0LjgwNyAwIDEgMCAwLTkuNjEzIDQuODA3IDQuODA3IDAgMCAwIDAgOS42MTNabTAgMGMtMy44OCAwLTcuNDc3IDMuMjA1LTcuNDc3IDcuNDc4TTEyIDEzLjA2OGMuODY4IDAgMS43MjEuMTYgMi41MjQuNDU3bTMuMjI1IDMuMDY1Yy0uMTczLS4yODctLjY5NS0uODYxLTEuNC0uODYxLS44OCAwLTEuMzk5LjgzMS0xLjM5OSAxLjQ2MiAwIDEuOTYgMS44NjYgMi42MTMgMi43OTkgMy42MDQuOTMzLS45OSAyLjc5OS0xLjY0MyAyLjc5OS0zLjYwNCAwLS42My0uNTItMS40NjItMS40LTEuNDYyLS43MDQgMC0xLjIyNi41NzQtMS4zOTkuODYxWiIvPjwvc3ZnPg==)
 */
export const IconUserHeart: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-user-heart'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M4.59 19.548c.506-3.764 3.838-6.48 7.41-6.48 2.31 0 4.52 1.136 5.93 2.957l-1.382-.312c-.868 0-1.405.896-1.405 1.519 0 1.398 1.294 2.333 2.175 2.997l.209.157.214.16H5.523c-.553 0-1.007-.45-.934-.998Z'
          clipRule='evenodd'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 13.068a4.807 4.807 0 1 0 0-9.613 4.807 4.807 0 0 0 0 9.613Zm0 0c-3.88 0-7.477 3.205-7.477 7.478M12 13.068c.868 0 1.721.16 2.524.457m3.225 3.065c-.173-.287-.695-.861-1.4-.861-.88 0-1.399.831-1.399 1.462 0 1.96 1.866 2.613 2.799 3.604.933-.99 2.799-1.643 2.799-3.604 0-.63-.52-1.462-1.4-1.462-.704 0-1.226.574-1.399.861Z'
      />
    </svg>
  )
}
