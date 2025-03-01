
package com.jarvis.bot.common.anthropic;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "anthropic.ai")
public class AiProperties {
    private String key;

    public String getKey() {
        return key;
    }

    public void setKey(final String key) {
        this.key = key;
    }

}
