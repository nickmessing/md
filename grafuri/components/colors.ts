type ColorClassCollection = {
  borderClass: string
  strokeClass: string
}

const colorClasses: ColorClassCollection[] = [
  { borderClass: 'border-lime-500', strokeClass: 'stroke-lime-500' },
  { borderClass: 'border-amber-500', strokeClass: 'stroke-amber-500' },
  { borderClass: 'border-teal-500', strokeClass: 'stroke-teal-500' },
  { borderClass: 'border-sky-500', strokeClass: 'stroke-sky-500' },
  { borderClass: 'border-pink-500', strokeClass: 'stroke-pink-500' },
  { borderClass: 'border-indigo-500', strokeClass: 'stroke-indigo-500' },
  { borderClass: 'border-yellow-500', strokeClass: 'stroke-yellow-500' },
  { borderClass: 'border-green-500', strokeClass: 'stroke-green-500' },
  { borderClass: 'border-purple-500', strokeClass: 'stroke-purple-500' },
  { borderClass: 'border-fuchsia-500', strokeClass: 'stroke-fuchsia-500' },
  { borderClass: 'border-blue-500', strokeClass: 'stroke-blue-500' },
  { borderClass: 'border-red-500', strokeClass: 'stroke-red-500' },
  { borderClass: 'border-orange-500', strokeClass: 'stroke-orange-500' },
  { borderClass: 'border-emerald-500', strokeClass: 'stroke-emerald-500' },
  { borderClass: 'border-rose-500', strokeClass: 'stroke-rose-500' },
  { borderClass: 'border-cyan-500', strokeClass: 'stroke-cyan-500' },
  { borderClass: 'border-violet-500', strokeClass: 'stroke-violet-500' },
]

export function getColorClass(index: number): ColorClassCollection {
  return colorClasses[index % colorClasses.length]!
}
