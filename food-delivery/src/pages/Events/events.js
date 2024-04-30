import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/navbar";
const eventsData = [
  {
    id: 1,
    title: "Live Music Night",
    date: "April 30, 2024",
    description: "Join us for an evening of live music featuring local artists.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Wine Tasting Workshop",
    date: "May 5, 2024",
    description: "Explore a variety of wines and learn from our expert sommeliers.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Seafood Festival",
    date: "May 12, 2024",
    description: "Indulge in a delightful seafood extravaganza with fresh catches from the sea.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Chef's Special Dinner",
    date: "May 20, 2024",
    description: "Experience a culinary journey with our chef's special dishes paired with fine wines.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Cooking Class: Italian Cuisine",
    date: "June 3, 2024",
    description: "Learn the art of Italian cooking from our seasoned chefs.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "Beer and BBQ Night",
    date: "June 15, 2024",
    description: "Enjoy an evening of craft beers and mouthwatering BBQ delights.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 7,
    title: "Family Brunch Buffet",
    date: "June 22, 2024",
    description: "Bring the whole family and feast on a delicious brunch buffet spread.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 8,
    title: "Healthy Eating Workshop",
    date: "July 5, 2024",
    description: "Discover the secrets of healthy eating and balanced nutrition.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 9,
    title: "Summer Cocktail Party",
    date: "July 15, 2024",
    description: "Sip on refreshing summer cocktails and enjoy a lively party atmosphere.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 10,
    title: "Dessert Extravaganza",
    date: "July 30, 2024",
    description: "Treat yourself to a decadent dessert experience with a variety of sweet treats.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 11,
    title: "Sushi Night",
    date: "August 10, 2024",
    description: "Experience the art of sushi-making and indulge in fresh sushi delicacies.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 12,
    title: "Gourmet Burger Festival",
    date: "August 25, 2024",
    description: "Savor gourmet burgers with unique flavors and gourmet toppings.",
    image: "https://via.placeholder.com/300",
  }
];

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const EventCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
`;

const EventContent = styled.div`
  padding: 15px;
`;

const EventTitle = styled.h3`
  margin-bottom: 10px;
`;

const EventDate = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const EventDescription = styled.p`
  font-size: 16px;
`;

export default function Events() {
  return (
    <>
    <Navbar />
    <Container>
      <h1>Upcoming Events</h1>
      {eventsData.map((event) => (
        <EventCard key={event.id}>
          <EventImage src={event.image} alt={event.title} />
          <EventContent>
            <EventTitle>{event.title}</EventTitle>
            <EventDate>Date: {event.date}</EventDate>
            <EventDescription>{event.description}</EventDescription>
          </EventContent>
        </EventCard>
      ))}
    </Container>
    </>
  );
}
