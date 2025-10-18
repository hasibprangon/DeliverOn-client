// import ServiceCard from "./ServiceCard"
import { FaTruck, FaMapLocationDot, FaBox, FaMoneyBillWave, FaHandshake, FaArrowRightArrowLeft } from "react-icons/fa6"
import ServiceCard from "./ServicesCard"

const servicesData = [
    {
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        icon: FaTruck,
    },
    {
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        icon: FaMapLocationDot,
    },
    {
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        icon: FaBox,
    },
    {
        title: "Cash on Home Delivery",
        description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        icon: FaMoneyBillWave,
    },
    {
        title: "Corporate Service / Contract In Logistics",
        description: "Customized corporate services which includes warehouse and inventory management support.",
        icon: FaHandshake,
    },
    {
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        icon: FaArrowRightArrowLeft,
    },
]

export default function OurServices() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-base-50">
            <div className="max-w-7xl mx-auto bg-[#03373D] p-10 rounded-xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Our Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-[#dadada] md:text-lg">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to
                        business shipments — we deliver on time, every time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
