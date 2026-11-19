import type { Icon } from './types'

export const IconRibbon: Icon = ({
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
      data-slot='icon-ui-ribbon'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path opacity='.2' d='M19.16 7.88 17.1 4.23l-5.12 5.9 2.96 3.9z' fill='currentColor' />
      <path
        opacity='.2'
        d='m11.71 18.04-2.83-3.76-4.55 4.53.75 3.14 3.53.32z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m16.39 5.23.6-.64a1 1 0 0 0 .1-1.23l-.7-1.08a1 1 0 0 0-.84-.46H8.4a1 1 0 0 0-.8.4l-.8 1.07a1 1 0 0 0 .12 1.35l.71.65a1 1 0 0 0 .68.26h7.36a1 1 0 0 0 .73-.32'
        fill='currentColor'
      />
      <path
        d='M6.4 4.23 5.28 6.19c-.46.82-.7 1.23-.67 1.67s.3.82.86 1.58l8.55 11.66c.4.54.6.81.87.97l.13.06c.3.14.63.14 1.3.14h.33c.94 0 1.42 0 1.77-.21q.33-.2.54-.54c.2-.35.2-.82.2-1.77 0-.37 0-.56-.04-.74l-.13-.32c-.08-.17-.2-.3-.45-.59z'
        stroke='currentColor'
      />
      <path
        d='m8.82 14.15-3.37 3.93a3 3 0 0 0-.45.6l-.12.3c-.04.18-.04.37-.04.75 0 .97 0 1.45.21 1.81q.2.3.51.51c.36.22.85.22 1.82.22h.31c.67 0 1 0 1.3-.13l.12-.07c.27-.15.47-.42.87-.95l1.98-2.67'
        stroke='currentColor'
      />
      <path
        d='m12.38 10.18 5.22-5.95 1.12 1.96c.46.82.7 1.23.67 1.67s-.3.82-.86 1.58l-3.17 4.32'
        stroke='currentColor'
      />
      <path
        d='m17.96 4.86-.6-1.08c-.57-.99-.85-1.48-1.32-1.75-.46-.27-1.03-.27-2.17-.27H10.1c-1.13 0-1.7 0-2.17.27s-.74.76-1.3 1.75L6 4.86'
        stroke='currentColor'
      />
      <path d='M16.27 5.55H7.7' stroke='currentColor' />
    </svg>
  )
}
