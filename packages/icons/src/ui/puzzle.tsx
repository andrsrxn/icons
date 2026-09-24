import type { Icon } from './types'

export const IconPuzzle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-puzzle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m18.73 20.32.04-.19A1.74 1.74 0 0 0 17.08 18a2.3 2.3 0 0 1-2.31-2.32v-1.11a2.4 2.4 0 0 1 2.42-2.42c1.1 0 1.95-.98 1.8-2.07l-.12-.89a2.6 2.6 0 0 0-2.37-2.23l-.84-.06h0-.04a1 1 0 0 1-.9-.9v-.04h0l-.08-.97a3.04 3.04 0 0 0-6.07-.01L8.5 6.03l-.01.07a1 1 0 0 1-.8.86l-.07.02h-.06l-.58.11a3 3 0 0 0-2.23 2.56l-.03.59-.14 5.5c-.08 2.94-.12 4.41.78 5.32s2.38.89 5.33.83l6.25-.12c.86-.01 1.6-.61 1.8-1.45'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19.28 19.07v-.17c0-.5-.4-.9-.9-.9h-.69a2.93 2.93 0 0 1 0-5.85h.69c.5 0 .9-.4.9-.9V10.2c0-.34 0-.51-.02-.65a3 3 0 0 0-2.7-2.7c-.14-.02-.3-.02-.65-.02h-.12a1 1 0 0 1-1-1h0v-.85a3.19 3.19 0 0 0-6.37 0v.87a1 1 0 0 1-1 1h-.57a3 3 0 0 0-2.78 2.78v6.63c0 2.83 0 4.25.87 5.13.88.87 2.3.87 5.12.87h6.37a3 3 0 0 0 2.84-2.84z'
        stroke='currentColor'
      />
    </svg>
  )
}
