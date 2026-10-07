import type { Icon } from './types'

export const IconFaceHappy: Icon = ({
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
      data-slot='icon-ui-face-happy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.72 12a10.28 10.28 0 1 0 20.56 0 10.28 10.28 0 0 0-20.56 0m5.85 2.58.93 2.33 3.5 1.46 3.17-1.46 1.47-2.52z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.28' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M9.59 9.53a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.01 9.53a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 18.09a4.8 4.8 0 0 0 3.97-1.82c.37-.53.56-.8.28-1.34s-.75-.54-1.69-.54H9.44c-.94 0-1.41 0-1.69.54s-.1.8.28 1.34A4.8 4.8 0 0 0 12 18.09'
        stroke='currentColor'
      />
    </svg>
  )
}
