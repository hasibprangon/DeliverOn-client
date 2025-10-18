export default function ServiceCard({ service }) {
    const {icon: Icon, title, description} = service
    return (
        <div className="card bg-base-100 shadow-md hover:bg-[#CAEB66] transition-shadow duration-300 border border-base-300">
            <div className="card-body">
                <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                </div>

                <h3 className="card-title text-lg text-center text-[#03373d]">{title}</h3>

                <p className="text-sm text-muted-foreground text-start text-[#606060]">{description}</p>
            </div>
        </div>
    )
}
