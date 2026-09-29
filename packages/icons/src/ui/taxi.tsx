import type { Icon } from './types'

export const IconTaxi: Icon = ({
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
      data-slot='icon-ui-taxi'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.1 9.37H5.45c-.66 0-.98 0-1.26.05a3 3 0 0 0-2.4 2.4c-.05.27-.05.6-.05 1.26v1.9a1.82 1.82 0 0 0 2.76 1.54l1.33-.8c.9-.54 2.05-.39 2.78.37.42.45 1.01.7 1.62.7h2.96a3 3 0 0 0 1.8-.7l.18-.15q.1-.11.17-.15a3 3 0 0 1 1.8-.7h1.15l.08.22a1.89 1.89 0 0 0 3.67-.73l-.14-2.9c-.03-.58-.04-.87-.18-1.09a1 1 0 0 0-.28-.3c-.22-.14-.5-.17-1.09-.22z'
        fill='currentColor'
      />
      <path
        d='m17.95 9.37-.19-.55c-.66-1.98-1-2.97-1.78-3.53-.78-.57-1.82-.57-3.9-.57H7.85c-1.7 0-2.56 0-3.26.41S3.48 6.28 2.64 7.77l-.15.25c-.37.66-.55.98-.65 1.34l-.01.07c-.1.36-.1.73-.1 1.48v3.25a2.6 2.6 0 0 0 2.63 2.63'
        stroke='currentColor'
      />
      <path
        d='M19.35 16.79c.85 0 1.28 0 1.62-.13a2 2 0 0 0 1.17-1.17c.13-.34.13-.77.13-1.61v-1.86c0-.54 0-.81-.06-1.03a2 2 0 0 0-1.5-1.5c-.22-.05-.49-.05-1.02-.05H1.93'
        stroke='currentColor'
      />
      <circle
        cx='6.99'
        cy='17.52'
        r='2.6'
        transform='rotate(90 6.99 17.52)'
        stroke='currentColor'
      />
      <circle
        cx='16.85'
        cy='17.52'
        r='2.6'
        transform='rotate(90 16.85 17.52)'
        stroke='currentColor'
      />
      <path d='M9.59 16.79h4.66' stroke='currentColor' />
      <path d='M9.84 9.44V4.72' stroke='currentColor' />
      <path d='M9.84 2.3h4.66' stroke='currentColor' />
    </svg>
  )
}
