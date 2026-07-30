import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size ?? 'auto',
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
      <title>BI</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bi-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bi-linearGradient-2'>
          <stop stopColor='#E4233B' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bi-linearGradient-3'>
          <stop stopColor='#34CD4E' offset='0%' />
          <stop stopColor='#2AB441' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bi-linearGradient-4'>
          <stop stopColor='#DF2239' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bi-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bi-BI'>
          <rect
            id='bi-FlagBackground'
            fill='url(#bi-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <g id='bi-Group-2' transform='translate(-2.080000, -1.440000)'>
            <rect
              id='bi-Mask-Copy'
              fill='url(#bi-linearGradient-2)'
              x='2.08023771'
              y='1.43733467'
              width='21'
              height='15'
            />
            <polygon
              id='bi-Rectangle-253'
              fill='url(#bi-linearGradient-3)'
              points='2 1.43733467 11 8.93733467 2 16.4373347'
            />
            <polygon
              id='bi-Rectangle-253'
              fill='url(#bi-linearGradient-3)'
              transform='translate(18.580000, 8.937335) scale(-1, 1) translate(-18.580000, -8.937335) '
              points='14.0799999 1.43733467 23.0799999 8.93733467 14.0799999 16.4373347'
            />
            <path
              d='M10.3586667,6.23264816 L1.11838581,-1.77635684e-15 L1.11022302e-15,1.65807515 L9.23955861,7.89023612 C9.13603457,8.22085713 9.08023771,8.57257987 9.08023771,8.93733467 C9.08023771,9.30208947 9.13603457,9.65381222 9.23955861,9.98443323 L1.77635684e-15,16.2165942 L1.11838581,17.8746693 L10.3586667,11.6420212 C10.9629797,12.1389684 11.7367651,12.4373347 12.5802377,12.4373347 C13.4237103,12.4373347 14.1974957,12.1389684 14.8018087,11.6420212 L24.0420896,17.8746693 L25.1604754,16.2165942 L15.9209168,9.98443323 C16.0244408,9.65381222 16.0802377,9.30208947 16.0802377,8.93733467 C16.0802377,8.57257987 16.0244408,8.22085713 15.9209168,7.89023612 L25.1604754,1.65807515 L24.0420896,-3.55271368e-15 L14.8018087,6.23264816 C14.1974957,5.73570091 13.4237103,5.43733467 12.5802377,5.43733467 C11.7367651,5.43733467 10.9629797,5.73570091 10.3586667,6.23264816 Z'
              id='bi-Rectangle-2'
              fill='url(#bi-linearGradient-1)'
            />
            <path
              d='M12.5802377,7.93733467 L11.8731309,8.14444145 L12.0802377,7.43733467 L11.8731309,6.73022789 L12.5802377,6.93733467 L13.2873445,6.73022789 L13.0802377,7.43733467 L13.2873445,8.14444145 L12.5802377,7.93733467 Z M11.0802377,10.4373347 L10.3731309,10.6444415 L10.5802377,9.93733467 L10.3731309,9.23022789 L11.0802377,9.43733467 L11.7873445,9.23022789 L11.5802377,9.93733467 L11.7873445,10.6444415 L11.0802377,10.4373347 Z M14.0802377,10.4373347 L13.3731309,10.6444415 L13.5802377,9.93733467 L13.3731309,9.23022789 L14.0802377,9.43733467 L14.7873445,9.23022789 L14.5802377,9.93733467 L14.7873445,10.6444415 L14.0802377,10.4373347 Z'
              id='bi-Star-2'
              fill='url(#bi-linearGradient-4)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
