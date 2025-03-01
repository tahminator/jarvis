
package com.jarvis.bot.common.anthropic;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@EnableConfigurationProperties(AiProperties.class)
public class AiConnection {
    private final AiProperties aiProperties;

    public AiConnection(final AiProperties aiProperties) {
        this.aiProperties = aiProperties;
    }

    // public static void main(String[] args) {
    //
    // AnthropicClient client = AnthropicOkHttpClient.builder().apiKey().build();
    //
    // MessageCreateParams createParams =
    // MessageCreateParams.builder().model(Model.CLAUDE_3_5_SONNET_LATEST).maxTokens(2048).addUserMessage("Tell
    // me a
    // story about building the best SDK!").build();
    //
    // try (StreamResponse<RawMessageStreamEvent> streamResponse =
    // client.messages().createStreaming(createParams)) {
    // streamResponse.stream().flatMap(event ->
    // event.contentBlockDelta().stream()).flatMap(deltaEvent ->
    // deltaEvent.delta().text().stream())
    // .forEach(textDelta -> System.out.print(textDelta.text()));
    // }
    // }
}
