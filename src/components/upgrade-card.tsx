type UpgradeCardProps = {
  title: string
}

export const UpgradeCard = ({ title }: UpgradeCardProps) => {
  return (
    <button
      type="button"
      role="article"
      className="border-gray-700 border-8 ring-blue-500"
    >
      <div className="border-gray-400 border-8">
        <div className="flex flex-col justify-end h-[200px] bg-gray-900">
          <div className="bg-gray-500 shadow-xl mb-5">
            <div className="font-semibold tracking-widest uppercase text-center py-1">
              {title}
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
