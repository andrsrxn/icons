import type { Icon } from './types'

export const IconPhonePlus: Icon = ({
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
      data-slot='icon-ui-phone-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.77 14.2 9.7 13.14c-.77-.78-1.16-1.16-1.3-1.64a2 2 0 0 1-.1-.68c.03-.5.31-.97.87-1.9.42-.73.64-1.09.7-1.48a2 2 0 0 0 0-.56 5 5 0 0 0-.7-1.48L7.82 3.04c-.47-.8-.7-1.21-1.1-1.32-.4-.1-.8.12-1.62.58l-1.12.64c-.46.26-.7.39-.93.68s-.3.47-.4.83C2 6.4 1.42 11.13 7.1 16.8s10.37 5.1 12.35 4.47c.36-.1.54-.16.83-.4.3-.25.43-.48.7-.95l.62-1.12c.46-.81.69-1.22.58-1.61s-.51-.63-1.32-1.1l-2.38-1.38c-.72-.42-1.08-.63-1.46-.69a2 2 0 0 0-.59 0c-.38.07-.74.28-1.45.7-.93.56-1.4.84-1.88.87a2 2 0 0 1-.72-.1c-.47-.14-.85-.52-1.61-1.29'
        fill='currentColor'
      />
      <path d='M13.84 6.18h7.08' stroke='currentColor' />
      <path d='M17.38 9.72V2.65' stroke='currentColor' />
      <path
        d='m10.02 13.46.43.43c.54.54.8.8 1.1.99a3 3 0 0 0 2.5.3c.33-.1.66-.3 1.32-.68.33-.2.5-.3.67-.37a2 2 0 0 1 1.37 0c.18.05.35.15.69.35l1.53.9c1.16.67 1.75 1 2.01 1.53a2 2 0 0 1 .22.8c.04.59-.3 1.17-.95 2.35-.18.31-.27.47-.46.66a2 2 0 0 1-.86.51c-1.88.64-6.7 1.38-12.5-4.43S2.03 6.18 2.67 4.3c.08-.22.11-.32.26-.54.05-.08.19-.24.25-.31.2-.19.35-.27.66-.45C5 2.34 5.6 2 6.18 2.04a2 2 0 0 1 .81.22c.52.27.86.85 1.53 2.01L9.4 5.8c.2.34.3.52.37.7a2 2 0 0 1 0 1.34c-.07.17-.17.35-.38.7-.4.66-.6 1-.7 1.33a3 3 0 0 0 .32 2.47c.18.3.46.57 1 1.13'
        stroke='currentColor'
      />
    </svg>
  )
}
