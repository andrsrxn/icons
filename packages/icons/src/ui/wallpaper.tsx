import type { Icon } from './types'

export const IconWallpaper: Icon = ({
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
      data-slot='icon-ui-wallpaper'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.72 9.8c0-2.84 0-4.25.88-5.13s2.3-.88 5.12-.88h8.44c2.87 0 4.3 0 5.19.9.88.9.86 2.33.8 5.2l-.02 1.62c-.05 2.8-.08 4.2-.8 4.39-.73.2-1.45-1-2.91-3.39l-.8-1.33c-.71-1.15-1.07-1.73-1.6-1.76-.54-.02-.94.53-1.73 1.63l-1.9 2.61c-.58.8-.87 1.2-1.3 1.26-.42.05-.8-.25-1.58-.87l-.8-.66c-.63-.5-.94-.74-1.3-.74s-.66.27-1.26.78l-1.13.97c-1.42 1.22-2.14 1.83-2.72 1.56s-.58-1.2-.58-3.08z'
        fill='currentColor'
      />
      <rect x='1.66' y='3.79' width='20.66' height='13.84' rx='3' stroke='currentColor' />
      <path d='M7.68 21.65h8.62' stroke='currentColor' />
      <path d='M12 21.65v-4.02' stroke='currentColor' />
      <path
        d='m21.14 16.38-3.38-5.68c-.75-1.28-1.13-1.91-1.7-1.92-.56 0-.95.63-1.72 1.9l-1.59 2.59c-.6.98-.9 1.47-1.38 1.53s-.89-.34-1.72-1.15L8.98 13c-.67-.65-1-.98-1.42-.97-.4 0-.73.33-1.4 1l-3.34 3.35'
        stroke='currentColor'
      />
      <path
        d='M8.03 8a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
