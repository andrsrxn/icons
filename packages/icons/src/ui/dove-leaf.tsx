import type { Icon } from './types'

export const IconDoveLeaf: Icon = ({
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
      data-slot='icon-ui-dove-leaf'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.98 8.9c-.98-1.35-3.69-1.75-4.66.22-.21.3-.6.43-.89.2-.94-.75-2-2.72-2.96-4.31 0 0-1.74 3.36-2.13 4.71-1.3.55-3.88-2.1-4.34-2.5-.47 1-.65 3.73.62 6.14 1.27 2.42 2.77 3.57 4.2 4.18a8 8 0 0 0-5.18 1.8c-.44.4-.24 1.06.3 1.3l3.61 1.65a1 1 0 0 0 1-.1l2.2-1.57c.26-.19.6-.23.9-.16a7.5 7.5 0 0 0 5.27-.72c2.74-1.51 2.76-4.52 2.76-6.15 0-1.15 1.13-2.28 1.89-3.08.26-.27.1-.68-.27-.74l-1.43-.22c-.37-.06-.67-.34-.89-.64'
        fill='currentColor'
      />
      <path
        d='m12.83 9.31-.55 1.36c-.18.47-.7.73-1.18.61-.4-.1-.83-.21-2.15-.65-3.3-1.1-4.9-2.52-5.95-3.4-.47 1-.65 3.72.62 6.13 1.27 2.42 2.77 3.57 4.2 4.18a8 8 0 0 0-5.18 1.8c-.44.4-.24 1.06.3 1.3l3.61 1.65a1 1 0 0 0 1-.1l2.2-1.57c.26-.19.6-.23.9-.16a7.5 7.5 0 0 0 5.27-.72c2.74-1.51 2.76-4.52 2.76-6.15 0-1.24 1.6-2.23 2.48-3.18.24-.26.06-.63-.3-.67l-1.96-.22c-.39-.04-.7-.33-.94-.63-1.08-1.38-4.12-1.87-5.13.42Z'
        stroke='currentColor'
      />
      <path
        d='M7.54 10.01c.01-2.52 1.25-4.77 2-5.44.45 1.14 1.07 2.94 3.11 5.1'
        stroke='currentColor'
      />
      <path
        d='M15.95 10.84a.38.38 0 1 1-.75.07.38.38 0 0 1 .75-.07'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M21.55 14.37s-.3-3.45-1.74-7.26c-1.43-3.8-2.84-5.38-2.84-5.38'
        stroke='currentColor'
      />
      <path d='M19.91 6.91s.55-.24 1.35-1.05a5 5 0 0 0 1.05-1.35' stroke='currentColor' />
      <path d='M18.47 4.4s-.55.22-1.7.22a5 5 0 0 1-1.69-.21' stroke='currentColor' />
      <path d='M18.81 4.4s.46-.37 1.03-1.36c.56-1 .65-1.58.65-1.58' stroke='currentColor' />
    </svg>
  )
}
