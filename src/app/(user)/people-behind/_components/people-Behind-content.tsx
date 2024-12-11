import { peopleBehind } from '@/lib/db/people-behind-data';
import PeopleBehindCart from './people-behind-cart';

export default function PeopleBehindContent() {
    return (
        <section className="pb-16">
            {/* tablet or desktop view */}

            <div className="sm:grid hidden grid-cols-2 gap-x-5  ">
                <div className="space-y-8">
                    {peopleBehind
                        .filter((_, inx) => inx % 2 === 0) // Even indexes
                        .map((people) => (
                            <PeopleBehindCart
                                key={people.id}
                                details={people}
                            />
                        ))}
                </div>

                <div className="space-y-8">
                    {peopleBehind
                        .filter((_, inx) => inx % 2 !== 0) // Odd indexes
                        .map((people) => (
                            <PeopleBehindCart
                                key={people.id}
                                details={people}
                            />
                        ))}
                </div>
            </div>
            {/* tablet or desktop view */}

            {/* mobile view  */}
            <div className="sm:hidden grid  grid-cols-1 px-2">
                <div className="space-y-8">
                    {peopleBehind.map((people) => (
                        <PeopleBehindCart key={people.id} details={people} />
                    ))}
                </div>
            </div>

            {/* mobile view  */}
        </section>
    );
}
