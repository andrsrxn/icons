import type { Icon } from './types'

export const IconPillBottle: Icon = ({
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
      data-slot='icon-ui-pill-bottle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.17 9.38c0-.35 0-.53.02-.68a2 2 0 0 1 1.69-1.68C7.02 7 7.2 7 7.55 7h7.28c1.88 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41v7.24c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H7.66c-.45 0-.68 0-.87-.03a2 2 0 0 1-1.58-1.59c-.04-.19-.04-.41-.04-.86s0-.68.04-.87a2 2 0 0 1 1.58-1.58c.2-.04.42-.04.87-.04h1.62c.7 0 1.04 0 1.33-.08a2 2 0 0 0 1.32-1.31c.1-.28.1-.63.1-1.33.02-.71.02-1.07-.07-1.36a2 2 0 0 0-1.32-1.34c-.3-.1-.65-.1-1.36-.1H7.55c-.35 0-.53 0-.67-.02a2 2 0 0 1-1.69-1.68c-.02-.14-.02-.32-.02-.67'
        fill='currentColor'
      />
      <path
        d='M5.17 7v9.24c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1.66c2.83 0 4.24 0 5.12-.88s.88-2.29.88-5.12V7'
        stroke='currentColor'
      />
      <rect x='3.26' y='1.76' width='17.47' height='5.24' rx='1.5' stroke='currentColor' />
      <path
        d='M5.17 11.38H10c.94 0 1.41 0 1.7.29.3.3.3.76.3 1.7v1.87c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H5.17z'
        stroke='currentColor'
      />
    </svg>
  )
}
