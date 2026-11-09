import type { Icon } from './types'

export const IconScreenShareWarning: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-screen-share-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.15 19.12c2.92 0 4.38 0 5.42-.73a4 4 0 0 0 .97-.97c.73-1.04.73-2.5.73-5.42s0-4.38-.73-5.42a4 4 0 0 0-.97-.97c-1.04-.73-2.5-.73-5.42-.73h-6.3c-2.92 0-4.38 0-5.41.73a4 4 0 0 0-.98.97c-.73 1.04-.73 2.5-.73 5.42s0 4.38.73 5.42q.4.57.98.97c1.03.73 2.49.73 5.41.73z'
        fill='currentColor'
      />
      <path d='M12 12.2V8.14' stroke='currentColor' />
      <path
        d='M12.49 15.64a.49.49 0 1 1-.98 0 .49.49 0 0 1 .98 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M1.73 12c0-2.92 0-4.38.73-5.42a4 4 0 0 1 .98-.97c1.03-.73 2.49-.73 5.41-.73h6.3c2.92 0 4.38 0 5.42.73q.56.4.97.97c.73 1.04.73 2.5.73 5.42v0c0 2.92 0 4.38-.73 5.42a4 4 0 0 1-.97.97c-1.04.73-2.5.73-5.42.73h-6.3c-2.92 0-4.38 0-5.41-.73a4 4 0 0 1-.98-.97c-.73-1.04-.73-2.5-.73-5.42'
        stroke='currentColor'
      />
    </svg>
  )
}
