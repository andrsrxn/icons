import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>TF</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tf-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tf-linearGradient-2'>
          <stop stopColor='#073AB6' offset='0%' />
          <stop stopColor='#002B93' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tf-linearGradient-3'>
          <stop stopColor='#F44653' offset='0%' />
          <stop stopColor='#EE2A39' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tf-linearGradient-4'>
          <stop stopColor='#1035BB' offset='0%' />
          <stop stopColor='#042396' offset='100%' />
        </linearGradient>
      </defs>
      <g id='tf-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='tf-TF'>
          <rect
            id='tf-FlagBackground'
            fill='url(#tf-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='tf-Mask-Copy'
            fill='url(#tf-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M0,0 L9.5,0 L9.5,7.25046158 C9.5,7.38827784 9.39331055,7.5 9.24589795,7.5 L0,7.5 L0,0 Z'
            id='tf-Rectangle-1349-Copy-3'
            fill='url(#tf-linearGradient-1)'
          />
          <rect
            id='tf-Rectangle-1349'
            fill='url(#tf-linearGradient-3)'
            x='6'
            y='0'
            width='3'
            height='7'
          />
          <rect
            id='tf-Rectangle-1349-Copy-2'
            fill='url(#tf-linearGradient-4)'
            x='0'
            y='0'
            width='3'
            height='7'
          />
          <rect
            id='tf-Rectangle-1349-Copy'
            fill='url(#tf-linearGradient-1)'
            x='3'
            y='0'
            width='3'
            height='7'
          />
          <path
            d='M13,6 L18,6 L17.5,7 L16,7 L16,7.5 L17,7.5 L16.5,8.5 L16,8.5 L16,10 L15,10 L15,7 L13.5,7 L13,6 Z M17,8.5 L18,10 L16,10 L17,8.5 Z M14,8.5 L15,10 L13,10 L14,8.5 Z M15.5,11.5 L14.5,10 L16.5,10 L15.5,11.5 Z M18.5,8 C18.2238576,8 18,7.77614237 18,7.5 C18,7.22385763 18.2238576,7 18.5,7 C18.7761424,7 19,7.22385763 19,7.5 C19,7.77614237 18.7761424,8 18.5,8 Z M12.5,8 C12.2238576,8 12,7.77614237 12,7.5 C12,7.22385763 12.2238576,7 12.5,7 C12.7761424,7 13,7.22385763 13,7.5 C13,7.77614237 12.7761424,8 12.5,8 Z M13.5,12 C13.2238576,12 13,11.7761424 13,11.5 C13,11.2238576 13.2238576,11 13.5,11 C13.7761424,11 14,11.2238576 14,11.5 C14,11.7761424 13.7761424,12 13.5,12 Z M17.5,12 C17.2238576,12 17,11.7761424 17,11.5 C17,11.2238576 17.2238576,11 17.5,11 C17.7761424,11 18,11.2238576 18,11.5 C18,11.7761424 17.7761424,12 17.5,12 Z M15.5,13 C15.2238576,13 15,12.7761424 15,12.5 C15,12.2238576 15.2238576,12 15.5,12 C15.7761424,12 16,12.2238576 16,12.5 C16,12.7761424 15.7761424,13 15.5,13 Z'
            id='tf-Combined-Shape'
            fill='#FFFFFF'
          />
        </g>
      </g>
    </svg>
  )
}
