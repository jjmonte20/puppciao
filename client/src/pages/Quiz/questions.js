const questions = [
    {
        id: "dogSize",
        qBlob: "How big will household's ideal dog be at full size?",
        a: [
            {
                val: 1,
                desc: "small or toy size - 2 to 22 pounds (1-10 kg)"
            },
            {
                val: 2,
                desc: "medium dog size - 24 to 57 pounds (11-26 kg)"
            },
            {
                val: 3,
                desc: "large dog size - 59 to 98 pounds (27-44 kg)"
            },
            {
                val: 4,
                desc: "giant dog size - 99 pounds or more (45 kg+)"
            }
        ] 
    },
    {
        id: "dogAge",
        qBlob: "What age group best fits the dog that would be invited into your home today?",
        a: [
            {
                val: 1,
                desc: "puppy - 8 weeks to 18 months of age depending on the dog"
            },
            {
                val: 2,
                desc: "adolescence - 6 months to 18 months of age depending on the dog"
            },
            {
                val: 3,
                desc: "adult - 1 year to 10 years of age depending on the dog"
            },
            {
                val: 4,
                desc: "senior - starting from 6 to 10 years of age depending on the dog"
            }
        ] 
    },
    {   
        id: "fur",
        qBlob: "How much grooming are you willing to do for your dog?",
        a: [
            {
                val: 1,
                desc: "low maintenance - brushing every few weeks, 2-4 months between baths, standard nail trimming and care"
            },
            {
                val: 2,
                desc: "high maintenance - weekly brushing, willing to handle breed specific maintenance"
            }
        ] 
    },
    {
        id: "drool",
        qBlob: "How much will drool bother you?",
        a: [
            {
                val: 1,
                desc: "I really don't like it"
            },
            {
                val: 2,
                desc: "Not my favorite, but I can deal with it for the right dog"
            },
            {
                val: 3,
                desc: "Not one bit"
            }
        ] 
    },
    {
        id: "pA",
        qBlob: "What physical activity level best represents your regular routine?",
        a: [
            {
                val: 1,
                desc: "Active less than 15 minutes a day"
            },
            {
                val: 2,
                desc: "Active about 15-30 minutes every day"
            },
            {
                val: 3,
                desc: "Active about 30 minutes to an hour every day"
            },
            {
                val: 4,
                desc: "Active more that an hour every day"
            }
        ] 
    },
    {
        id: "dogInt",
        qBlob: "How smart would you like your dog to be?",
        a: [
            {
                val: 1,
                desc: "not that smart"
            },
            {
                val: 2,
                desc: "smart, but not smarter than me"
            },
            {
                val: 3,
                desc: "smarter than me"
            }
        ] 
    },
    {
        id: "baby",
        qBlob: "Do you have any toddlers (0 - 3) Are you planning on bringing a new baby into your home?",
        a: [
            {
                val: 1,
                desc: "No"
            },
            {
                val: 2,
                desc: "Yes"
            }
        ] 
    },
    {
        id: "kidAge",
        qBlob: "How old are the children in your home?",
        a: [
            {
                val: 1,
                desc: "I don't have any children"
            },
            {
                val: 2,
                desc: "7 and under"
            },
            {
                val: 3,
                desc: "8 and older"
            },
            {
                val: 4,
                desc: "I have children in both ranges"
            }
        ] 
    },
    {
        id: "training",
        qBlob: "What is your plan for training your future dog?",
        a: [
            {
                val: 1,
                desc: "Teaching the basics on behavior and maybe a few tricks"
            },
            {
                val: 2,
                desc: "Make training an ongoing process, my dog will be a lifelong student"
            }
        ] 
    },
    {
        id: "parent",
        qBlob: "How would you describe your dog parenting style?",
        a: [
            {
                val: 1,
                desc: "I'd like to keep a low key style"
            },
            {
                val: 2,
                desc: "I'll set my boundaries, but I'd like to spend time playing with my dog as well"
            }
        ] 
    },
];

module.exports = questions;