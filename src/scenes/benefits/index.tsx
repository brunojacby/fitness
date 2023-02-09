import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types"
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of Art Facities",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quidem doloremque excepturi cum dolore est",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "State of Art Facities",
        description: "Hic cupiditate doloribus aut, quibusdam laborum sint et minus expedita ea optio vel voluptate mollitia",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "State of Art Facities",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quidem doloremque excepturi cum dolore est",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20"    
    >
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
         >
            <motion.div className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x:0},
            }}
            >
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aut, natus perferendis ipsum quas, eveniet officia atque expedita itaque doloribus ducimus! Praesentium hic ullam sapiente et totam</p>
            </motion.div>

            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                    key={`${benefit.title}-${Math.random()}`}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                     />
                ))}
            </motion.div>            
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                    />
                    <div>           
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                                </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5">
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.
                        </p>
                        <p className="mb-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </motion.div>

                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>      
        </motion.div>
    </section>
  )
}

export default Benefits