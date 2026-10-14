import type { Icon } from './types'

export const IconSpeechToVideo: Icon = ({
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
      data-slot='icon-ui-speech-to-video'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12.26 2.82v18.36' stroke='currentColor' />
      <path d='M8.7 9.15v6.76' stroke='currentColor' />
      <path d='M1.9 9.15v6.76' stroke='currentColor' />
      <path d='M5.3 6.63v11.8' stroke='currentColor' />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.06 18.89c1.91 0 2.87 0 3.58-.42a3 3 0 0 0 1.05-1.05c.42-.71.42-1.67.42-3.58v-3.68c0-1.91 0-2.87-.42-3.58a3 3 0 0 0-1.05-1.05c-.71-.42-1.67-.42-3.58-.42h-3.7c-.74 0-1.34.6-1.34 1.34v1.28c0 .6.7.95 1.18.57a.7.7 0 0 1 .82-.06l4.28 2.53a1.26 1.26 0 0 1 .06 2.13l-4.08 2.7a1.1 1.1 0 0 1-.89.15 1.1 1.1 0 0 0-1.37 1.06v.55c0 .84.68 1.53 1.52 1.53z'
        fill='currentColor'
      />
      <path
        d='M12.32 5.11h3.79c2.82 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.78c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88h-3.8'
        stroke='currentColor'
      />
      <path
        d='M12.32 12c0-2.14 0-3.21.63-3.66q.14-.1.29-.16c.71-.3 1.62.27 3.44 1.4 1.62 1.03 2.44 1.54 2.51 2.27v.3c-.07.73-.89 1.24-2.51 2.26-1.82 1.14-2.73 1.7-3.44 1.4q-.15-.05-.29-.15c-.63-.45-.63-1.52-.63-3.66'
        stroke='currentColor'
      />
    </svg>
  )
}
