import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sidebar = {
    open: {
        x: '0%',
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    },
    closed: {
        x: '-100%',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={false}
                        animate={sidebar.open}
                        exit={sidebar.closed}
                        className="fixed top-0 left-0 bottom-0 w-64 bg-white p-4 list-none"
                    >
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Menu;