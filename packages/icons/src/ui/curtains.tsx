import type { Icon } from './types'

export const IconCurtains: Icon = ({
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
      data-slot='icon-ui-curtains'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.44 3.8c.13-.43.19-.66.32-.82a1 1 0 0 1 .38-.29c.19-.08.42-.08.88-.08s.69 0 .88.08a1 1 0 0 1 .38.3c.13.16.2.38.31.82l1.17 4.34c.08.3.13.46.21.6.09.13.21.23.46.43l3.31 2.68c.77.62 1.15.93 1.18 1.35s-.29.8-.94 1.53l-1.37 1.54a2 2 0 0 0-.4.52c-.06.15-.07.32-.1.65l-.18 2.34c-.07.88-.1 1.31-.4 1.58-.28.26-.72.26-1.6.26H9.5c-.85 0-1.27 0-1.55-.25s-.34-.67-.43-1.51l-.29-2.42a2 2 0 0 0-.12-.64 2 2 0 0 0-.42-.51l-1.37-1.43c-.68-.7-1.02-1.06-1-1.48.01-.43.38-.76 1.12-1.4l3.2-2.82c.22-.2.33-.3.41-.42.08-.13.12-.27.2-.56z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M13.44 21.44h-2.88c-3.77 0-5.65 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83v-2.88c0-3.77 0-5.65 1.17-6.82 1.18-1.18 3.06-1.18 6.83-1.18h2.88c3.77 0 5.65 0 6.83 1.18 1.17 1.17 1.17 3.05 1.17 6.82v2.88c0 3.77 0 5.65-1.18 6.83-1.17 1.17-3.05 1.17-6.82 1.17'
        stroke='currentColor'
      />
      <path d='M2.67 13.26s3.2-.46 5.66-3.79c2.46-3.32 2.14-6.75 2.14-6.75' stroke='currentColor' />
      <path
        d='M21.32 13.26s-3.2-.46-5.66-3.79c-2.46-3.32-2.14-6.75-2.14-6.75'
        stroke='currentColor'
      />
      <path d='M2.55 12.75s1.47-.93 2.86-3.77C6.81 6.14 6.5 2.96 6.5 2.96' stroke='currentColor' />
      <path d='M21.28 12.75s-1.48-.93-2.87-3.77-1.07-6.02-1.07-6.02' stroke='currentColor' />
      <path d='M7.07 21.26s.21-2.2-.87-4.94S3 13.16 3 13.16' stroke='currentColor' />
      <path d='M16.8 21.26s-.2-2.2.87-4.94c1.08-2.75 3.2-3.16 3.2-3.16' stroke='currentColor' />
    </svg>
  )
}
