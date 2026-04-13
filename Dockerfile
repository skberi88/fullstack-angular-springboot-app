FROM maven:3.9.9-eclipse-temurin-21

WORKDIR /app

COPY api /app

RUN mvn clean package

EXPOSE 8080

CMD ["java", "-jar", "target/api.jar"]