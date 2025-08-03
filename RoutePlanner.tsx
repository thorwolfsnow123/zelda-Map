import React, { useState } from 'react';

const RoutePlanner: React.FC = () => {
    const [routes, setRoutes] = useState<string[]>([]);
    const [currentRoute, setCurrentRoute] = useState<string>('');

    const handleAddRoute = () => {
        if (currentRoute) {
            setRoutes([...routes, currentRoute]);
            setCurrentRoute('');
        }
    };

    const handleRemoveRoute = (routeToRemove: string) => {
        setRoutes(routes.filter(route => route !== routeToRemove));
    };

    return (
        <div className="route-planner">
            <h2>Route Planner</h2>
            <input
                type="text"
                value={currentRoute}
                onChange={(e) => setCurrentRoute(e.target.value)}
                placeholder="Enter your route"
            />
            <button onClick={handleAddRoute}>Add Route</button>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        {route}
                        <button onClick={() => handleRemoveRoute(route)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoutePlanner;