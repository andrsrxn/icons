import type { Icon } from './types'

export const IconMusicNoteZzz: Icon = ({
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
      data-slot='icon-ui-music-note-zzz'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M5.34 9.06H2.48c-.57 0-.85 0-.93-.17s.1-.4.48-.82l2.93-3.39c.38-.43.56-.64.48-.82s-.36-.17-.93-.17H1.58'
        stroke='currentColor'
      />
      <path
        d='M12.75 12.52H9.07c-.56 0-.84 0-.92-.18s.1-.38.46-.81L12.48 7c.37-.42.55-.64.47-.81S12.6 6 12.03 6H8.25'
        stroke='currentColor'
      />
      <path
        d='M5.49 16.51H3.86c-.56 0-.84 0-.92-.17s.1-.39.46-.82L5 13.65c.36-.43.54-.64.46-.81s-.36-.18-.92-.18H2.8'
        stroke='currentColor'
      />
      <path opacity='.2' d='m22.34 9.85-1.05 2.5-4.53-.9.51-3.04z' fill='currentColor' />
      <path
        opacity='.2'
        d='M16.67 19.71a2.54 2.54 0 1 1-5.08 0 2.54 2.54 0 0 1 5.08 0'
        fill='currentColor'
      />
      <path d='M16.67 19.71a2.54 2.54 0 1 0-5.08 0 2.54 2.54 0 0 0 5.08 0' stroke='currentColor' />
      <path
        d='m16.67 19.72.02-8.27m0 0 2.83.8a2.13 2.13 0 0 0 2.72-2.05.7.7 0 0 0-.5-.68L19.97 9c-1.24-.37-1.85-.56-2.33-.37q-.4.15-.66.49c-.31.4-.3 1.05-.3 2.34'
        stroke='currentColor'
      />
    </svg>
  )
}
