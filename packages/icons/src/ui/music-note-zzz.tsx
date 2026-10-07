import type { Icon } from './types'

export const IconMusicNoteZzz: Icon = ({
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
      data-slot='icon-ui-music-note-zzz'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M5.34 9.06H3.36c-.95 0-1.42 0-1.55-.29-.14-.3.17-.65.8-1.36l1.78-2.07c.62-.71.93-1.07.8-1.36-.14-.3-.61-.3-1.55-.3H1.58'
        stroke='currentColor'
      />
      <path
        d='M12.75 12.52H9.94c-.94 0-1.4 0-1.54-.3-.14-.28.17-.64.78-1.35l2.74-3.2c.6-.72.91-1.08.78-1.37s-.6-.29-1.54-.29h-2.9'
        stroke='currentColor'
      />
      <path
        d='M5.49 16.51H3.86c-.56 0-.84 0-.92-.17s.1-.39.46-.82L5 13.65c.36-.43.54-.64.46-.81s-.36-.18-.92-.18H2.9'
        stroke='currentColor'
      />
      <path opacity='.2' d='m22.34 9.85-1.05 2.5-4.53-.9.51-3.04z' fill='currentColor' />
      <path
        opacity='.2'
        d='M16.67 19.71a2.54 2.54 0 1 1-5.08 0 2.54 2.54 0 0 1 5.08 0'
        fill='currentColor'
      />
      <path
        d='M16.67 19.71a2.54 2.54 0 0 1-2.54 2.55 2.54 2.54 0 1 1 2.54-2.55'
        stroke='currentColor'
      />
      <path
        d='m16.67 19.72.02-8.27m0 0 2.83.8a2.13 2.13 0 0 0 2.72-2.05.7.7 0 0 0-.5-.68L19.97 9c-1.24-.37-1.85-.56-2.33-.37q-.4.15-.66.49c-.31.4-.3 1.05-.3 2.34'
        stroke='currentColor'
      />
    </svg>
  )
}
